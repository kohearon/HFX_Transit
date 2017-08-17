var request = require('supertest');
var app = require('../../app.js');
var expect = require('chai').expect

describe('GET /all-vehicles', function(){

  it('Should Respond With A 200 Status Code', function(done){
    request(app)
      .get('/all-vehicles')
      .expect(200,done) // note that we're passing the done as parameter to the expect
  });

  it('Should Return JSON', function(done) {
    request(app)
      .get('/all-vehicles')
      .expect('Content-Type', /json/, done)
  })

  it('Should Be An Array of Latitudes And longitudes', function(done){
    request(app)
      .get('/all-vehicles')
      .then( res => {
        expect(res.body[0].lat).to.not.equal(undefined)
        expect(res.body[0].lon).to.not.equal(undefined)
      })
      .then(done)
      .catch( err => {
        return done(err);
      })
  })

  it('Each Trip Should Have A Route ID', function(done) {
    request(app)
      .get('/all-vehicles')
      .then( res => {
        expect(res.body[0].tripID).to.not.equal(undefined)
      })
      .then(done)
      .catch( err => {
        return done(err);
      })
  })

});
