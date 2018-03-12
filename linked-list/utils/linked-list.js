window.LinkedList = function () {
		var head,
			length = 0;
		var Node = function (element) {
				this.element = element;
				this.next = null;
		};
		this.append = function (element) {
				var node = new Node(element), //传入值创建Node项
					current;

				if (!head) { //如果为空链表
						head = node; //设置node为head（head为第一个节点的引用）
				} else {
						current = head; //从表头开始
						while (current.next) {
								//循环列表，找到最后一项（列表最后一个节点的下一个元素始终是null）
								current = current.next;
						}
						//使当前最后一项的指针指向node
						current.next = node;
				}
				length++; //更新列表长度
		};
		this.show = function () {
				return head;
		};
		this.length = function () {
				return length;
		};
		this.isEmpty = function () {
				return length === 0;
		};
		this.remove = function (position) {
				if (position > -1 && position < length) { //有效性检测
						var current = head, //用current来循环列表
							previous,
							index = 0;

						if (position === 0) {
								head = current.next; //移除第一个元素，直接把head指向下一个元素
						} else {
								while (index++ < position) { //循环列表找到满足条件的那个元素
										previous = current; //
										current = current.next; //把下一个变量覆给current
								}
								//跳过current，将当前要移除的元素的上一个与下一项直接连接起来。
								previous.next = current.next;
						}
						length--;
						return current.element;
				}
				else {
						return null;
				}
		};
		this.insert = function (position, element) {
				if (position >= 0 && position <= length) {
						var node = new Node(element),
							current = head, //通过current从head位置开始迭代
							previous,
							index = 0;

						if (position === 0) { //第一个位置
								node.next = current; //此时current = head,指向head那么node就成了第一个
								head = node; //node指向为head
						} else {
								while (index++ < position) { //循环迭代到目标位置
										previous = current;
										current = current.next;
								}

								node.next = current; // node的下一个为current
								previous.next = node; // node的上一个位置为previous
						}
						length++;
						return true;
				} else {
						return false;
				}
		};
		this.toString = function () {
				var current = head,
					string = '';
				while (current) { //循环访问列表
						string += current.element + (current.next ? '\n' : '');
						current = current.next;
				}
				return string; //返回字符串
		};
		this.indexOf = function (element) {
				var current = head,
					index = 0;
				while (current) {
						if (element === current.element) {
								return index; //找到返回当前位置
						}
						index++;
						current = current.next;
				}
				return -1;    //找不到返回-1
		};
};
window.DoublyLinkedList = function () {
		var Node = function (element) {
				this.element = element;
				this.next = null;
				this.prev = null; //新指针
		};

		var length = 0;
		var head = null;
		var tail = null; //对列表最后一项的引用
		this.append = function (element) {
				this.insert(length, element);
		};
		this.show = function () {
				return head;
		};
		this.insert = function (position, element) {
				if (position >= 0 && position <= length) {
						var node = new Node(element),
							current = head,
							previous,
							index = 0;

						if (position === 0) { //在第一个位置添加
								if (!head) { //如果head不存在即链表为空
										head = node;
										tail = node;
								} else { //链表不为空
										node.next = current;
										current.prev = node;
										head = node;
								}
						} else if (position === length) { //在最后一个位置添加
								current = tail;
								current.next = node;
								node.prev = current;
								tail = node;
						} else {
								while (index++ < position) { //在列表中间添加
										previous = current; //循环迭代
										current = current.next;
								}
								node.next = current;
								previous.next = node;

								current.prev = node;
								node.prev = previous;
						}
						length++; //更新列表长度

						return true;
				} else {
						return false;
				}
		};
		this.remove = function (position) {
				if (position > -1 && position < length) { //检查越界值
						var current = head,
							previous,
							index = 0;
						if (position === 0) { //第一个位置
								head = current.next;

								if (length === 1) { //如果链表只有一项
										tail = null;
								} else { //也就相当于把current.next.prev = null
										head.prev = null;
								}
						} else if (position === length - 1) { //最后一项
								current = tail; //tail的引用赋给current变量
								tail = current.prev; //上一项指向tail
								tail.next = null; //最后一项的next都是指向null的
						} else {
								while (index++ < position) { //从中间位置移除
										previous = current;
										current = current.next;
								}

								previous.next = current.next; //直接跳过current连接上一项和下一项
								current.next.prev = previous;
						}
						length--;
						return current.element;
				} else {
						return null;
				}
		};
};