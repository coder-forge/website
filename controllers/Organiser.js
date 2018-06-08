
var Organiser = require('../models/Organiser');



function OrganiserClass(){

  var self = this;



  this.post = function Post(data){
    return new Promise(function(resolve, reject){

      // 1. create record
      var org = new Organiser(data);
      org.save(function(err, res){
        // 2. handle errors
        if(err) return reject(err);
        // 3. return response
        return resolve(res);
      });

    });
  }



}

module.exports = new OrganiserClass();
