var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var aStack = {
  	length: 0,
  	push: stackMethods["push"],
  	pop: stackMethods["pop"],
  	size: stackMethods["size"]
  }

  return aStack;
};

var stackMethods = {
	push: function(value) {
		//this.length++;
		this[this.length++] = value;
	},
	pop: function() {
		if (this.length !== 0) {
			this.length--;
			return this[this.length];			
		}
	},
	size: function() {
		return this.length;
	}
};


  // var anInstance = {
  //   length: 0;
  // };

  // var storage = {};

  // var push = function(value) {
  //   this[length++] = value;
  // }
