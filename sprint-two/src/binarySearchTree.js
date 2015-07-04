var BinarySearchTree = function(value){
	//functional instantiation
	//variables that define stuff
	//tree object = {} that contains left and right {child}
	var tree = {};
	tree.value = value;
	tree.left = null;
	tree.right = null;
	//methods here
	tree.insert = function(input) {
		//current node? Check if input is greater, or less than current node.
		if (input < tree.value) {
		  //if less than, check if left node is empty. 
		  if (tree.left === null) {
		    //if empty, insert a new tree there
		    tree.left = BinarySearchTree(input);
		  } else {
		    //if not, compare with that node(greater/less than) (recurse).
		 		tree.left.insert(input);
		  }
		} else if (input > tree.value) {
		  //if greater than, check if right node is empty.
		  if (tree.right === null) {
		    //if empty, insert a new tree there
		    tree.right = BinarySearchTree(input)
		  } else {
		    //if not, compare with that node(greater/less than) (recusre)
		    tree.right.insert(input);
		  }
		}
		//does not return any value
	} // end of insert
	//insert, contains, depthFirstLog
	tree.contains = function(target) {
		//if tree.value is target return true
		if(tree !== null) {
			if (tree.value === target) {
				return true;
			}
			//else compare if target is > or < tree.value
			if (target < tree.value) {
			//if <
				//run contains on left child
				if(tree.left !== null) {
					return tree.left.contains(target);
				}
			}
			//if >
			else if (target > tree.value) {
				//run contains on right child
				if(tree.right !== null) {
					return tree.right.contains(target);
				}
			}
		}
		//return false if failure
		return false;
	};

	tree.depthFirstLog = function(callback) {};

	//return the tree object
	return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
