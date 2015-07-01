var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var anInstance = {
    length: 0;
  };

  var storage = {};

  var push = function(value) {
    this[length++] = value;
  }
};

var stackMethods = {};


