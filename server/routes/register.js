const Validator = require('validator');
const isEmpty = require('is-empty');

//function validateRI takes in data from from register form on front end
module.exports = function validateRegisterInput(data){
    let errors = {};


// converts empty fields to empty string so we can use the validator functions
        
        data.email = !isEmpty(data.email) ? data.email : "";
        data.password = !isEmpty(data.password) ? data.password : "";
        data.password2 = !isEmpty(data.password2) ? data.password2 : "";

        
    
        //email checking
        if(Validator.isEmpty(data.email)){
            errors.email = "Email field is required"
        } else if (!Validator.isEmail(data.email)){
            errors.email = "Email is invalid"
        }

        //password checking
        if(Validator.isEmpty(data.password)){
            errors.password = "Password field is required";
        }
        if (Validator.isEmpty(data.password2)){
            errors.password2 = "Confirm password field is required"
        }
        if(!Validator.isLength(data.password, {min: 6, max: 30})){
            errors.password = "Password must be at least 6 characters";
        }

        if(!Validator.equals(data.password, data.password)){
            errors.password = "Passwords must match";
        }

        return{
            errors,
            isValid: isEmpty(errors)
        }
      
    };