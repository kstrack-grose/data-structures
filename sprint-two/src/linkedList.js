var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    if(list.head === null) {
      list.head = node;
    }

    if(list.tail !== null) {
      list.tail.next = node;
    }
    list.tail = node;


  };

  list.removeHead = function(){  
    if(list.head !== null){
      var result = list.head.value;
      list.head = list.head.next;
      return result;
    }
  };

  list.contains = function(target){
    var curNode = list.head;
    // debugger;
    while(curNode !== null) {
      if(curNode.value === target) {
        return true;
      }
      curNode = curNode.next;
    } 
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */