// const store = require('../../../store/database')
// const controller = require('./controller')
// module.exports = controller(store)

//**************rutas es saber como recibe y envia parametros a los servicios-------- */
//los serviciios si saben que hacer con esos datos, parametros y saben devolver lo que pedimos

const express = require('express')

const UsersService = require('../../../services/index')
// const {usersMock} = require('../../../utils/mock/users')

function usersApi(app) {
  const router = express.Router()
  app.use('/api/users', router)

  const usersService = new UsersService()

  router.get('/', async function(req, res, next) {
    // ?Nombrequeryyseconcatena
    const { tags } = req.query

    try {
      // const users = await usersService.getUsers({ tags })
      const users = await usersService.getUsers({ tags })
      res.status(200).json({
        data: users,
        message: 'usuarios listados',
      })
    } catch (error) {
      next(error)
    }
  })

  router.get('/:userId', async function(req, res, next) {
    const { userId } = req.params

    try {
      // const users = await usersService.getUsers({ tags })
      const user = await usersService.getUser({ userId })
      console.log(user)
      res.status(200).json({
        data: user,
        message: 'usuario listado',
      })
    } catch (error) {
      next(error)
    }
  })

  //create
  router.post('/', async function(req, res, next) {
    const { body: user } = req

    try {
      const createdUserId = await usersService.createUser(
        user,
      )
      res.status(201).json({
        data: createdUserId,
        message: 'usuario creado',
      })
    } catch (error) {
      next(error)
    }
  })

  router.put('/:userId', async function(req, res, next) {
    const { body: user } = req
    const userId = req.params
    try {
      const updatedUserId = await usersService.updateUser({ userId, user})
      res.status(200).json({
        data: updatedUserId,
        message: 'usuario actualizado',
      })
    } catch (error) {
      next(error)
    }
  })

  router.delete('/:userId', async function(req, res, next) {
    const userId = req.params
    try {
      // const users = await usersService.getUsers({ tags })
      const deletedUser = await usersService.deleteUser({ userId})
      res.status(200).json({
        data: deletedUser,
        message: 'usuario eliminado',
      })
    } catch (error) {
      next(error)
    }
  })

  router.patch('/:userId', async function(req,res,netxt) {
    const userId = req.params
    const { body: user } = req

    try {
      const patchUser = await usersService.patchUser({ userId, user })
      res.status(200).json({
        data: patchUser,
        message: 'usuario patch-reparado'
      })
    } catch (error) {
      next(error)
    }
  })

}

module.exports = usersApi
