var MyStack = function() {
	myStack = []
	// constructor() {
	//     this.myStack = []
	// }
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
	myStack.length += 1
	myStack[myStack.length - 1] = x
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
	let valPop = myStack[myStack.length - 1]
	delete myStack[myStack.length - 1]
	myStack.length -= 1
	return valPop
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
	return myStack[myStack.length - 1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
	if (myStack.length === 0) return true
	else return false
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */