

var Graph = function(){
	this.nodes = {};
};

Graph.prototype.addNode = function(node){
	this.nodes[node] = {
		value : node,
		edges : {}
	}
};

Graph.prototype.contains = function(node){
	return (this.nodes[node] !== undefined);
};

Graph.prototype.removeNode = function(node){
	if(this.contains(node)) {
		delete this.nodes[node];
		//we need to remove any edges that contain this node
		for(var otherNode in this.nodes) {
			if(!!otherNode.edges[node]) {
				delete otherNode.edges[node];
			}
		}
	}
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	var doesHaveEdge = false;
	if(!!this.nodes[fromNode].edges[toNode]) {
		doesHaveEdge = true;
	}
	return doesHaveEdge;
};

Graph.prototype.addEdge = function(fromNode, toNode){
	var fromEdges = this.nodes[fromNode].edges;
	fromEdges[toNode] = toNode;
	var toEdges = this.nodes[toNode].edges;
	toEdges[fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



