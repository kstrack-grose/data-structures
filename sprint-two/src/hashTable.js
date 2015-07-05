var HashTable = function(){
  this._limit = 8;
  this._storage = [];
  this._numOfItems = 0;
};

HashTable.prototype.insert = function(key, value){
  var index = getIndexBelowMaxForKey(key, this._limit);
	//make hash table at index (above) set to linked listed
	if(this._storage[index]=== undefined) {
		this._storage[index] = LinkedList();
	}
  //find out whether or not this key exists in the linked list
    //if yes, change value
    var curNode = this._storage[index].head;
    while(curNode !== null) {
      if(curNode.value[0] !== key) {
        curNode = curNode.next;
      } else {
        curNode.value[1] = value; 
        //this was the wrong position in the tuple! now corrected
      }
    }
    //if no, add
    //with value value
    this._storage[index].addToTail([key, value]); 
    if (this._numOfItems === 0) {
      this._numOfItems = 1;
    } else if (this._numOfItems > 0) {
      this._numOfItems++;
    }
    this.checkSize();
};

HashTable.prototype.retrieve = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  var curNode = this._storage[index].head;

  if(curNode === null) {
  	return null;
  }

  while(curNode.next !== null) {
  	if(curNode.value[0] === key) {
  		return curNode.value[1];
  	}
  	curNode=curNode.next;
  }
  if(curNode.value[0] === key) {
  	return curNode.value[1];
  }
  return null;
};

HashTable.prototype.remove = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  var value = this.retrieve(key);
  this._storage[index].removeNode(value);
  this._numOfItems--;
  this.checkSize();
};

HashTable.prototype.desize = function() {
  //old storage
  var oldStorage = this._storage;
  //old limit
  var oldLimit = this._limit;
  //change limit and empty storage, so we put everything back into it
  this._limit = oldLimit/2;
  this._storage = [];
  //keep the context in a variable so we can use it in a different scope
  var that = this;

  //for each item in the oldStorage array, 
  _.each(oldStorage, function(bucket) {
    //for each node in the linked list that is in bucket
    bucket.each(function(node) {
      //insert it back into 'that', which is the hash table
      that.insert(node[0], node[1]);
    });
  });
}

HashTable.prototype.upsize = function() {
  var oldStorage = this._storage;
  var oldLimit = this._limit;

  this._limit = 2*oldLimit;
  this._storage = [];
  var that = this;

  // var newHashTable = new HashTable();
  // newHashTable._limit = oldLimit*2;
  _.each(oldStorage, function(bucket) {
    bucket.each(function(node) {
      that.insert(node[0], node[1]);
    });
  });
}

// Adding a check size function and supporting desize and upsize functions
HashTable.prototype.checkSize = function() {
  if (this._numOfItems > 0.75*this._limit) {
    //upsize
    this.upsize();
  } else if (this._numOfItems < 0.25*this._limit) {
    //desize
    this.desize();
  }
}

// var each = function(array, callback) {
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] !== undefined) {
//       callback(this[i]);
//     }
//   }
// }

/*
 * Complexity: What is the time complexity of the above functions?
 O(1) for all of the methods
 */
