var request = require("request"),
    assert = require('assert'),
    helloWorld = require("../index.js"),
    base_url = "http://localhost:3000/";

describe("Welcome to CI/CD Server", function() {

  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        assert.equal(200, response.statusCode);
        //helloWorld.close();
        done();
      });
    });
  });

  describe("welcomeMessage", function (){
    it("Validate Message", function(done){
      var res = helloWorld.welcomeMessage();
      var message = "Welcome to CI/CD 101 using CircleCI!";
      assert.equal(res, message);
      done();
    });  
  });
}); 