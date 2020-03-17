const  { Router } = require('express')
const User = require('../../../models/User')
const controller = require('./index')
const router = Router()

//Routes
router.get('', getAll)
router.get('/:id', get)
// router.post('/', upsert)
// router.put('/:id', update)
// router.delete('/:id', remove)

function getAll(req, res, next) {
    controller.getAll()
    //   .then( lista => {
    //       res.status(200).send('asdasd')
    //   })
    //   .catch(next)
}

function get(req, res, next) {
    res.json({message: 'Elemento mostrado'})
}
module.exports = router