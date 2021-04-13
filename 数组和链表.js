/** 
 * 数组：需要足够大的，且是连续的内存空间才能存放数组元素
 * 链表：只需内存足够大，不用连续的空间，存放的每一个元素都有保存指向下一个元素的内存地址
 * 数组在随机访问元素时比较快，直接访问即可，链表在插入和删除数据的时候比较快，只要保存或修改指向的内存地址即可，所以读取操作少，插入操作多时就应该使用链表来存储数据 
 * */
class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class SingleList {
    constructor() {
        this.size = 0
        this.head = new Node('head');
        this.currentNode = null;
    }

    get length() {
        return this.size;
    }

    find(item) {
        let currentNode = this.head;
        while(currentNode && currentNode.data !== item) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    findLast() {
        let currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    append(item) {
        const lastNode = this.findLast();
        const node = new Node(item);
        lastNode.next = node;
        this.size++;
    }

    insert(item, element) {
        const currentNode = this.find(item);
        if(!currentNode) return;
        const node = new Node(element);
        node.next = currentNode.next;
        currentNode.next = node;
        this.size++;
        return node;
    }

    forEach(callback) {
        let currentNode = this.head;
        while(currentNode) {
            callback(currentNode.data, currentNode.next)
            currentNode = currentNode.next;
        }
    }

    remove(item) {
        let currentNode = this.head;
        while(currentNode && currentNode.next !== item) {
            currentNode = currentNode.next;
        }
        if(currentNode) {
            currentNode.next = currentNode.next.next;
            this.size --;
        }
    }

    isEmpty() {
        return this.size === 0;
    }

    show() {
        console.log(this.currentNode);
        return this.currentNode;
    }

    clear() {
        this.head.next = null;
        this.size = 0
    }
}

const list = new SingleList();
list.insert(1,1);
list.append(2);
list.append(3);
list.forEach(function(data, next) {
    console.log(data)
})
list.remove(2);
console.log(list.length)
console.log(list.isEmpty())
console.log(list.show())
console.log(list.clear())
console.log(list.length);