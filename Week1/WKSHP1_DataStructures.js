//                      Queues Implementaiton
// Queue ADT

var Queue = function() {
  this.queue = [];
  this.head = null;
  this.tail = null;
  this.size = 0;
}

Queue.prototype.enqueue = function(val) {
  if (this.size === 0) {
      this.head = queue[size];
  } else
      this.tail = queue[size];

 queue[size] = val;
  size++;
}

Queue.prototype.dequeue = function() {
  let newList = [];

 // Slice to get dequeued list
  for (let i = 1; i < this.size; i++) {
      newList[i - 1] = this.queue[i];
  }

 this.queue = newList;
  this.head = this.queue[0];

 this.size--;
}

Queue.prototype.getSize = function() {
  return this.size;
}
//                      Linked List Implementation

//Creates a new instance of a Linked List
function LinkedList() {
  this.head = null;
  this.tail = null;

}

//Creates a Node creator
function Node(val) {
  this.val = val;
  this.link = null;
}

//Creates and adds new nodes to the top to the stack
LinkedList.prototype.addNode = function(val) {
  //New Node Creator using Node function
  let newNode = new Node(val);
  //If there is no head
  if (this.head === null) {
    //In the Linked List assign head to the newly created Node
    this.head = newNode;
  //If there is no tail
  } else if (this.tail === null) {
      //Assign Linked List's tail to the newly created node
      this.tail = newNode;
      //Link the head to the new Node
      this.head.link = newNode;
  //If there is a head and a tail
  } else {
      //Reassign the previous tail's link to the newly created node
      this.tail.link = newNode;
      //Make the newly created node the new tail
      this.tail = newNode;
      }
}

LinkedList.prototype.pop = function() {
  //Uses the head as a reference to walk the link chain
  let tempNode = this.head;
  //If the head's link is null => we found the tail (there is one element)
  if (tempNode.link === null) {
    //Empties the list (creates a new one)
    this.head = null;
    this.tail = null;
  } else {
    //If there is more than one element in the list
    //Continue to traverse down the link chain
      while (tempNode.link !== null) {
        //Until we find the tail
        if (tempNode.link.link === null) {
          //Reassign the tempNode's link as null
          tempNode.link = null;
          // Make the tempNode the new tail
          this.tail = tempNode;
          //Escape out of the loop
          break;
        }

        tempNode = tempNode.link;
      }
    }
}

/*LinkedList.prototype.enqueue = function(val) {
  let node = new Node(val);

  // Empty list
  if (this.head === null) {
    this.head = node;
  } else {

  }
}*/

LinkedList.prototype.dequeue = function() {
  let node = this.head;

  if (node.link === null) {
    this.head = null;
  } else {
    this.head = this.head.link;
  }
}

LinkedList.prototype.traverse = function() {
  let tempNode = this.head;

  while (tempNode !== null) {
    console.log(tempNode.val);
    tempNode = tempNode.link;
  }
}


 var LI = new LinkedList();
 LI.push(10);
 LI.push(11);
 LI.push(13);
 LI.push(14);
 LI.dequeue();
 LI.traverse();
// LI.traverse();
// LI.pop();
// LI.pop();
// LI.pop();
// LI.pop();
// LI.traverse();



