var HashTable = function(){
  this._limit = 8;
  this._storage = [];
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
        curNode.value[0] = value;
      }
    }
    //if no, add
    //with value value
    this._storage[index].addToTail([key, value]); 
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
  this._storage[index].removeNode(value, key);
};



/*
 * Complexity: What is the time complexity of the above functions?
 O(1) for all of the methods
 */
