var request = require('supertest');
var app = require('../../app.js');

describe('GET /all-vehicles', function(){
  it('Should Respond With A 200 Status Code', function(done){
    request(app)
      .get('/all-vehicles')
      .expect(200, done); // note that we're passing the done as parameter to the expect
  });
});
