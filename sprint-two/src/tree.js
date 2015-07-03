var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.children = [];

  return newTree;
};





var treeMethods = {};


treeMethods.addChild = function(value){
	this.children[this.children.length] = Tree(value);
};

treeMethods.contains = function(target){
	/* recursive function here */
	var result = false;
	var searchChildren = function(tree, goal) {
		if (tree.value === goal) {
			result = true;
			return;
		} else {
			for (var i = 0; i < tree.children.length; i++) {
				searchChildren(tree.children[i], goal);
			}
		}
	}

	searchChildren(this, target);

	return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
