function binaryTreeClick () {

		var nums = new BST();
		nums.insert(23);
		nums.insert(45);
		nums.insert(16);
		nums.insert(37);
		nums.insert(3);
		nums.insert(99);
		nums.insert(22);
		var min = nums.getMin();
		console.log(nums.root);
		console.log(min);  // 打印出3

}