var Queue = function(){
  var aQueue = {
  	length: 0,
  	storage: {}
  };
  _.extend(aQueue, queueMethods);
  return aQueue;
};

var queueMethods = {
	enqueue: function(value){
		this.storage[this.length] = value;
		this.length++;
	},
	dequeue: function() {
		if (this.length !== 0) {
			var result = this.storage[0];

			delete this.storage[0];

			for (var key in this.storage) {
				this.storage[key-1] = this.storage[key];
			}
			this.length--;
			return result;
		}
	},
	size: function() {
		return this.length;
	}
};



