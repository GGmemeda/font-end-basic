window.onload = function () {

};

function getLinkedSimple1 () {
		var list = new LinkedList();
		list.append(15);
		list.append(10);
		list.append(11);
		list.append(1);
		list.append(2);
		console.log(list.show());
		console.log(list.length());
		list.remove(0);
		console.log(list.show());
		console.log(list.length());
		console.log(list.indexOf(2));
		console.log(list.indexOf(15));
		var list1 = new DoublyLinkedList();
		list1.insert(0,15);
		list1.insert(1,5);
		console.log(list1.show());
}