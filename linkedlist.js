class _Node {
   constructor(value, next) {
       this.value = value;
       this.next = next;
   }
}

class LinkedList {
   constructor() {
       this.head = null;
   }

      insertFirst(item) {
         this.head = new _Node(item, this.head);
   }

   insertLast(item) {
      if (this.head === null) {
         this.insertFirst(item);
      }
      else {
         let tempNode = this.head;
         while (tempNode.next !== null) {
            tempNode = tempNode.next;
         }
         tempNode.next = new _Node(item, null);
      }
   }

   find(item) { 
      // Start at the head
      let currNode = this.head;
      // If the list is empty
      if (!this.head) {
         return null;
      }
      // Check for the item 
      while (currNode.value !== item) {
         /* Return null if it's the end of the list 
            and the item is not on the list */
         if (currNode.next === null) {
            return null;
         }
         else {
            // Otherwise, keep looking 
            currNode = currNode.next;
         }
      }
      // Found it
      return currNode;
   }

   remove(item){ 
      // If the list is empty
      if (!this.head) {
         return null;
      }
      // If the node to be removed is head, make the next node head
      if (this.head.value === item) {
         this.head = this.head.next;
         return;
      }
      // Start at the head
      let currNode = this.head;
      // Keep track of previous
      let previousNode = this.head;

      while ((currNode !== null) && (currNode.value !== item)) {
         // Save the previous node 
         previousNode = currNode;
         currNode = currNode.next;
      }
      if (currNode === null) {
         console.log('Item not found');
         return;
      }
      previousNode.next = currNode.next;
   }

}

//create a linked list - drill 1 

function main() {
   let SLL = new LinkedList();

   SLL.insertFirst("apollo");
   SLL.insertFirst("boomer");
   SLL.insertFirst("helo");
   SLL.insertFirst("husker");
   SLL.insertFirst("buskler");
   SLL.insertFirst("tahuida");

   SLL.remove("buskler");
   SLL.remove("husker");

   SLL.insertBefore("Athena", "Boomer");

   SLL.insertAfter("Hotdog", "Helo");

   SLL.insertAt("Kat", 3);

   SLL.remove("Tauhida");

console.log(display(SLL)); // original display test
console.log(listSize(SLL)); //returns the size of the linked list
console.log(isEmpty(SLL)); // finds if the list is empty or not (without using the size() function)
console.log(findLast(SLL)); //returns the last node in the linked list
console.log(findPrev(SLL, "Boomer")); //finds the node before the item you are looking for
console.log(findThird(SLL));
console.log(findMid(SLL));

}

//Mystery Program
// function is looping through the linked list looking for dupes, linear time 

module.exports = LinkedList
