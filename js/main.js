

/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.

$(document).on('ready', function() {
  
  var Num = /^[a-zA-Z]+$/;
  
 
  jQuery.validator.addMethod("zeroNumbers", function(value, element) {
  return this.optional(element) || Num.test(value);
}, "Use letters only: no numbers");
  
  
  
 
  
$('#order-form').validate({
  submitHandler: function(form) {
 
    $(form).submit();
  },
  
  rules: {
   "your-name": {
       required: true,
       maxlength: 100,
       zeroNumbers: true
     
   },
    
    "your-address": {
        required: true,
        maxlength: 50
    },
  
     "your-city": {
        required: true,
        maxlength: 30
    },
    
       "your-state": {
        required: true,
        maxlength: 2
    },
    
       "your-zip": {
        required: true,
        maxlength: 5,
        minlength: 5,
        digits: true
    },
    
     "card-holder-name": {
       required: true,
       maxlength: 30,
       zeroNumbers: true
       },
  
     "card-number": {
       required: true,
       creditcard: true,
     
     },
    
    "expiry-year": {
       required: true
      
           },
    
      "cvv": {
       required: true,
       maxlength: 3,
       minlength: 3,
       digits: true
              
            },
    
    "shipping-method": {
        required: true,
      },
          
       "comments": {
         required: true,
           maxlength: 500
               }
  
  }
  
  
    
 
});
 
 // * (Stretch Goal: If possible, verify that the 2-letter combo matches with known state abbreviations.) 
  
jQuery.validator.addMethod("States", function(value) {
    var statesOA = [
        "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
        "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
        "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
        "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
        "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
        "AS", "DC", "FM", "GU", "MH", "MP", "PR", "PW", "VI"
    ];
    return $.inArray(value.toUpperCase(), statesOA) != -1;
  },  "please provide state valid state");
  
  
  

  
$('label span.glyphicon').tooltip();
});


