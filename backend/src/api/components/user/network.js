const  { Router } = require('express')
const User = require('../../../models/User')
const router = Router()

//Routes
router.get('', getAll)
router.get('/:id', get)
// router.post('/', upsert)
// router.put('/:id', update)
// router.delete('/:id', remove)

async function getAll(req, res, next) {
    try {
        const users = await User.find();
        res.json(users)
    } catch (error) {
        console.log(error)
    }

}

function get(req, res, next) {
    res.json({message: 'Elemento mostrado'})
}
module.exports = router