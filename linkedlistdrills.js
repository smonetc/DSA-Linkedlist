//reverse the list
function reverseList(list) {
   let reversedHead = null;
   let currNode = list.head;
   let nextNode;

   while (currNode !== null) {
       nextNode = currNode.next;
       currNode.next = reversedHead;
       reversedHead = currNode;
       currNode = nextNode;
   }

   list.head = reversedHead;
   return list;
}

//middle of list
function findMid(list) {
   let currNode = list.head; 
   let prevNode = list.head; 
   let listLength = 0; 
   let index = 0;

   while (currNode !== null) {
       listLength++;
       prevNode = currNode;
       currNode = currNode.next;
   }

   let midpoint = (Math.ceil(listLength / 2) - 1); 
   currNode = list.head; 
   prevNode = list.head; 

   while (index < midpoint) {
       prevNode = currNode; 
       currNode = currNode.next; 
       index++; 
   }
   return currNode; 
}

//cycle 

function cycleList(list) {
   let item1 = list.head;
   let item2 = list.head;

   while (item1 !== item2) {
       item1 = item1.next;
       item2 = item2.next.next;
   }
   if (item1 === item2) {
       return true;
   }
   return false;
}