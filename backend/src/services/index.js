const MongoLib = require('../store/database')

const { usersMock } = require('../utils/mock/users')
const MongoLibreria = require('../store/database')

class UsersService {
  constructor() {
    this.collection = 'users'
    this.mongoDB = new MongoLibreria()
    console.log(this.mongoDB.user)
  }

  async getUsers({ tags }) {
    const query = tags && { tags: { $in: tags } }

    const users = await this.mongoDB.getAll(
      this.collection,
      query,
    )
    return users || []
  }

  async getUser({ userId}) {
    const user = await this.mongoDB.get(this.collection, userId)
    return user || {}
  }

  async createUser({ user }) {
    const createUser = await this.mongoDB.create(this.collection, user)
    return createUser
  }
  async updateUser({ userId, user } = {}) {
    const updateUser = await this.mongoDB.update(this.collection, userId, user)
    return updateUser
  }

  async deleteUser({ userId }) {
    const deleteUser = await this.mongoDB.delete(this.collection, userId)
    return deleteUser
  }

  async patchUser({ userId, user}) {
    const patchUser = Promise.resolve(usersMock[0].id)
    return patchUser
  }
}

module.exports = UsersService
