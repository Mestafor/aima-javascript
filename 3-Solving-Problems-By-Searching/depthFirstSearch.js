
var depthFirstSearch = function(problem){
  this.problem = problem;
  this.node = problem.INITIAL;
  if(this.problem.GOAL_TEST(this.node)){
    return this.problem.NO_ACTION;
  }
  this.stack = [this.node];
  this.explored = {};
  this.iterate = function(){
    var isNewState = false;
    //If Goal reached, Return No Action
    if(this.problem.GOAL_TEST(this.node)){
      return [isNewState,this.problem.NO_ACTION];
    }
    //If stack is empty, return No Action
    if(this.stack.length == 0){
      return [isNewState,this.problem.NO_ACTION];
    }
    //Extract the shallowest node from the queue
    node = this.stack.pop();
    this.node = node;
    //Add Extracted node to explored
    this.explored[node] = true;
    actions = this.problem.ACTIONS(node)
    console.log("actions is " + actions);
    for(var i = 0; i < actions.length; i++){
      var action = actions[i];
      console.log("Current action is "+action);
      child = this.problem.CHILD_NODE(node,action);
      console.log("Child found is "+child);
      if(!this.explored[child]){
        this.stack.push(child);
        this.explored[child] = true;
      }
      console.log("Stack is "+this.stack);
    }
    isNewState = true;
    return [isNewState,node]
  }
}
