var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var length = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[length++] = value;
  };

  someInstance.dequeue = function(){
    if (length !== 0) {
      
       var result = storage[0];
      // storage[0] = storage[1];

      // for (var item in storage) {
      //   if(storage[item+1] !== undefined) {
      //     storage[item] = storage[item+1];
      //   }
      // }

      for(var i = 0; i < length; i++) {
        if(storage[i+1] !== undefined) {
          storage[i] = storage[i+1];
        }
      }
      length--;
      return result;
    }
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};

// queue.enqueue('a');
// queue.enqueue('b');
// queue.dequeue();
// queue.enqueue('c');
// expect(queue.dequeue()).to.equal('b')