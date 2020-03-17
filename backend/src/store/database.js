// const mongoose = require('mongoose')
const { MongoClient, ObjectId } = require('mongodb')
const { config } = require('../config')
// const URI = 'mongodb://localhost/mernstack'
const MONGO_USER = config.mongo.user
const MONGO_PASSWORD = config.mongo.password
const MONGO_PORT = config.api.port
const MONGO_DATABASE = config.mongo.database

const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${config.mongo.host}:${MONGO_PORT}/${MONGO_DATABASE}?retryWrites=true&w=majority`

// let mycon = new MongoClient(MONGO_URI, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
    
// })
// let con = mongoose.connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex:true
// })

// class MongoL {
//     constructor() {
//         this.client = new MongoClient(MONGO_URI,{
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         })
//         this.mongoDatabase = MONGO_DATABASE
//     }

//     connect() {
//         if(MongoL.connection){
//             MongoL.connection = new Promise((resolve, reject) => {
//                 this.client.connect(error => {
//                     if(error) {
//                         reject(error)
//                     } 
//                     console.log('Mongo connectado')
//                     resolve(this.client.db(this.mongoDatabase)) 
//                 })
//             })
//         }
//         return MongoL.connection
//     }

//     getAll(colllection, query) {
//         return this.connect().then(db => {
//             return db.colllection(colllection).find(query).toArray()
//         })
//     }
//     get(colllection, id) {
//         return this.connect().then(db => {
//             return db.colllection(colllection).findOne( {_id: ObjectId(id)} )
//         })
//     }
function mongoLibreria() {
    
        let client = new MongoClient(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        let dbname = MONGO_DATABASE
    
    connect(client, dbname)
}

function connect(client, dbname) {
    if(!mongoLibreria.connection) {
        mongoLibreria.connection = new Promise((resolve, reject) => {
            client().connect(err => {
                if(err){
                    reject(err)
                }
                console.log('DB Conectada')
                resolve(client.db(dbname))
            })
        })
    }
}

    // function getAll(colllection, query) {
    //     return connect().then(db => {
    //         return db.colllection(colllection).find(query).toArray()
    //     })
    // }

    //CRUD
//     Create
// insertOne
// Read
// find
// findOne
// Update
// updateOne
// Delete
// deleteOne






module.exports = {
    mongoLibreria,
    // getAll
}