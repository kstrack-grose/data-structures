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
    //with value value
    this._storage[index].addToTail({}); 
    this._storage[index].tail.value[key] = value;
};

HashTable.prototype.retrieve = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  var curNode = this._storage[index].head;

  while(curNode.next !== null) {
  	if(curNode.value[key] !== undefined) {
  		return curNode.value[key];
  	}
  	curNode=curNode.next;
  }
  if(curNode.value[key] !== undefined) {
  	return curNode.value[key];
  }
  return null;
};

HashTable.prototype.remove = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  var value = this.retrieve(key);
  this._storage[index].removeNode(value);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
