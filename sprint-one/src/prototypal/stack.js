var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var aStack = Object.create(stackMethods);
  aStack.length = 0;
  aStack.storage = {};
  return aStack;

};

var stackMethods = {
	push: function(value) {
		this.storage[this.length++] = value;
	},
	pop: function(){
		if(this.length !== 0) {
			return this.storage[--this.length];
		}
	},
	size: function(){
		return this.length;
	}
};


