const { MongoClient, ObjectId } = require('mongodb')
const { config } = require('../config/index')

const USER = config.mongo.user
const PASSWORD = config.mongo.password
const DB_NAME = config.mongo.database

const MONGO_URI = `mondodb+srv://${USER}:${PASSWORD}@${config.mongo.host}:${config.api.port}/${DB_NAME}?retryWrites=true&w=majority`
// const MONGO_URI = `mondodb+srv://leonardo_movies:a3b8pn0o0pd0l4pa1@$cluster0-yfxun.mongodb.net/db_movies_name?retryWrites=true&w=majority`

class MongoLibreria {
  constructor() {
    this.client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    this.dbName = DB_NAME
  }
  //singleton no se cree nuevo cliente si ya existe una conexio
  connect() {
    if (!MongoLibreria.connection) {
      MongoLibreria.connection = new Promise(
        (resolve, reject) => {
          this.client.connect(err => {
            if (err) {
              reject(err)
            }
            resolve(this.client.db(this.dbName))
            console.log('Connected To Mongo')
          })
        },
      )
    }
    return MongoLibreria.connection
  }

  getAll(collection, query) {
    return this.connect().then(db => {
      return db
        .collection(collection)
        .find(query)
        .toArray()
    })
  }

  get(collection, id) {
    return this.connect().then(db => {
      return db
        .collection(collection)
        .findOne({ _id: ObjectId(id) })
    })
  }

  create(collection, data) {
    return this.connect()
      .then(db => {
        return db.collection(collection).insertOne(data)
      })
      .then(result => result.insertedId)
  }

  update(collection, id, data) {
    return this.connect()
      .then(db => {
        return db
          .collection(collection)
          .updateOne(
            { _id: ObjectId(id) },
            { $set: data },
            { upsert: true },
          )
      })
      .then(result => result.upsertedId || id)
  }

  delete(collection, id) {
    return this.connect()
      .then(db => {
        return db
          .collection(collection)
          .deleteOne({ _id: ObjectId(id) })
      })
      .then(() => id)
  }
}

module.exports = MongoLibreria
