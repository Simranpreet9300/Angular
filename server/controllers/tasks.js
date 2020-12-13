//Simranpreet Kaur - 200427339
//Website name: http://localhost:3000/ and http://localhost:4200/

//Instantiate an express router as usual
var express = require('express');
var router = express.Router();

//refrences our Task model
const Task = require('../models/task')
const globals = require('../../config/globals')

//allow cross origin requests
router.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', globals.clientRoot);
	res.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept')
	res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
	next()
})
//GET ALL - API//
router.get('/', (req, res) => {
	//return all tasks
	Task.find((err, task) => {
		if (err)
		{
			return res.send(err).status(400)
		}
		else
		{
            res.json(task).status(200)
		}
	})
})

//GET ONE - API//
router.get('/:_id', (req, res) => {
	//return selected tasks
	Task.findById(req.params._id,(err, task) => {
		if (err) {
			return res.send(err).status(400)//400 = Bad Request
		}
		else {
			res.json(task).status(200)//200 = OK
		}
	})
})

/*POST*/
router.post('/', (req, res) => {
	Task.create({
		name: req.body.name,
		specialties: req.body.specialties,
		gender: req.body.gender,
		available: req.body.available,
		priority: req.body.priority
	}, (err, task) => {
			if (err) {
				return res.send(err).status(400)
			}
			else {
				res.json(task).status(201)
            }
		
    })
})

//DELETE//
router.delete('/:id', (req, res) => {
	Task.remove({ _id: req.params._id },
	(err, task) => {
		if (err) {
			return res.send(err).status(400)
		}
		else {
			res.json(task).status(201)
		}

	})
})

//PUT(UPDATE)
router.put('/:id', (req, res) => {
	Task.update({ _id: req.params._id }, req.body, (err, task) => {
			if (err) {
				return res.send(err).status(400)
			}
			else {
				res.json(task).status(201)
			}

		})
})

//Making Public
module.exports = router