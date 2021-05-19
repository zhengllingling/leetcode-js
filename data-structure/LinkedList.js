class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    // get size(){
    //     return this.size;
    // }
    find(index) {
        let orderNumber = 1;
        let currentNode = this.head;
        while(currentNode) {
            if(orderNumber === index) {
                return currentNode
            }
            ++orderNumber;
            currentNode = currentNode.next;
        }
        return null;
    }
    get(index) {
        const node = this.find(index);
        if(node) {
            return node.val;
        }
        return -1;
    }
    addAtHead(val) {
        const node = new Node(val, this.head);
        this.head = node;
        this.size++;
    }
    addAtTail(val) {
        const node = new Node(val, null);
        let currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        this.size++;
    }
    addAtIndex(index, val) {
        if(index === this.size) {
            this.addAtTail(val);
        } else if(index < 0) {
            this.addAtHead(val);
        } else if(index > this.size) {
            return;
        } else {
            const prevNode = this.find(index);
            if(prevNode) {    
                const node = new Node(val, prevNode.next);
                prevNode.next = node;
                this.size ++;
            }else {
                this.addAtTail(val);
            }
        }
    }
    deleteAtIndex(index) {
        if(index > 0 && index <= this.size) {
            const preNode = this.find(index - 1);
            const node = this.find(index);
            preNode.next = node.next;
            this.size--;
        }
    }
}

const list = new LinkedList();
console.log(list.get(1))
export default LinkedList;