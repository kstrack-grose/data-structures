var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  //length property:
  var length = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[length++] = value;
  };

  someInstance.pop = function(){
    if (length !== 0) {
      return storage[--length];
    } else {
      return storage[length-1];
    }

  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
