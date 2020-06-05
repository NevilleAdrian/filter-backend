const {Filter, validate} = require('../models/fliter')
const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
  const filter = await Filter.find().sort({first_name: 1});
  res.send(filter);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let filter = new Filter({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    country: req.body.country,
    car_model:  req.body.car_model,
    car_model_year: req.body.car_model_year,
    car_color:  req.body.car_color,
    gender: req.body.gender,
    job_title:  req.body.job_title,
    bio:  req.body.bio
  });

  filter = await filter.save();
  res.send(filter);
});



router.get('/:id', async (req, res) => {
  const filter = await Filter.findById(req.params.id)

  if (!filter) return res.status(404).send('The filter with the given ID was not found.');
  res.send(filter);
});

module.exports = router;