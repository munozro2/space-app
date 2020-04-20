const Validator = require('validator');
const isEmpty = require('is-empty');


module.exports = function validateLoginInput(data){
    let errors = {};
    
      //email checking
      if(Validator.isEmpty(data.email)){
        errors.email = "Email field is required";
    } else if(!Validator.isEmail(data.email)){
        errors.email = "email is invalid"
    }

    //password checking
    if(Validator.isEmpty(data.password)){
        errors.password = "Password field is required"
    }

    return{
        errors,
        isValid: isEmpty(errors)
    }
}