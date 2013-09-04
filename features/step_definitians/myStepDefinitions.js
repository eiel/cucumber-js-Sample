var myStepDefinitionsWrapper = function () {
  this.World = require("../support/world.js").World;

  this.Given(/^hoge$/, function(callback) {
  // express the regexp above with the code you wish you had
     callback();
  });
  this.Then(/^goro$/, function(callback) {
  // express the regexp above with the code you wish you had
     callback.fail("gorogoro");
     callback();
  });
};

module.exports = myStepDefinitionsWrapper;
