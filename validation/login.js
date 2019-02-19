const validator = require('validator'); // validate has a lot of built-in functions like isEmail(),isLength,...
const isEmpty = require('./is-empty'); // instead of installing lodash and use isEmpty() of that, we created that function.

module.exports = function validateLoginInput (data) { // it's just a function that when it called, it takes some data and make sure that it's as the way as we want
  let errors = {}; // we create an empty errors object, so if there was an error, it gets fill

  // the required things
  data.email = !isEmpty(data.email) ? data.email : ''; // the isEmpty() method used here is the method we own created
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid!';
  }

  if (validator.isEmpty(data.email)) {
    errors.email = 'Email feild is required!';
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'Password feild is required!';
  }

  return {
    errors, // it means -> errors:errors , so if it's empty, it returns an empty object.
    isValid: isEmpty(errors) // and if it was empty,it returns true
  };
};
