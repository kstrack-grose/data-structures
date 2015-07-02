var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.length = 0;
  this.storage = {};

};

Queue.prototype = {
	enqueue: function(value){
		this.storage[this.length++] = value;
	},
	dequeue: function(){
		if(this.length !== 0) {
			var result = this.storage[0];
			delete this.storage[0];

			for(var key in this.storage) {
				this.storage[key-1] = this.storage[key];
			}
			this.length--;
			return result;
		}
	},
	size: function() {
		return this.length;
	},
	constructor: Queue
}

