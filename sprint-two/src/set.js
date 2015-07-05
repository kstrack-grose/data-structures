var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	this._storage[item] = item;
};

setPrototype.contains = function(item){
	if (item in this._storage) {
		return true;
	} else {
		return false;
	}
};

setPrototype.remove = function(item){
	if (this.contains(item)) {
		delete this._storage[item];
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 add: O(1)
 contains: O(n) we are pretty sure how item in this._storage works behind the scenes
 remove: O(n) again we are pretty sure the delete function has this time complexity
 */
