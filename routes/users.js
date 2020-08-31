const router = require('express').Router()
let User = require('../models/user.model')

router.route('/').get((req, res) => {
  User.find()
    .then(users =>  res.json(users))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/add').post((req, res) => {
  const name = req.body.name
  const tasks = req.body.tasks

  const newUser = new User({ name, tasks })
  newUser.save()
    .then(() => res.json('User has beend added.'))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.name = req.body.name
      user.tasks = req.body.tasks

      user.save()
        .then(() => res.json('User updated.'))
        .catch(err => res.status(400).json(`Error: ${err}`))
    })
})

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json(`User has been deleted.`))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router