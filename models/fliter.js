const mongoose = require('mongoose')
const Joi = require('joi');

const filterSchema = new mongoose.Schema({
    first_name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    last_name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      maxlength:255
  },
 country: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  car_model: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  car_model_year: {
      type: Number,
      required: true,
  },
  car_color: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  gender: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20
  },

  job_title: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 200
  },
  bio: {
    type: String,
    required: true,
  }

 })

 const Filter = mongoose.model('Filter', filterSchema) 

 function validateCustomer(filter) {
    const schema = {
      first_name: Joi.string().min(5).max(50).required(),
      last_name: Joi.string().min(5).max(50).required(),
      email: Joi.string().min(5).max(255).required().email(),
      country: Joi.string().min(2).max(50).required(),
      car_model:  Joi.string().min(2).max(50).required(),
      car_model_year: Joi.number().required(),
      car_color:  Joi.string().min(2).max(50).required(),
      gender: Joi.string().min(2).max(20).required(),
      job_title:  Joi.string().min(2).max(200).required(),
      bio:  Joi.string()
    };
  
    return Joi.validate(filter, schema);
  }


exports.Filter = Filter;
exports.validate = validateCustomer;