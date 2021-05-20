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
    find(index) {
        let currentIndex = 0;
        let currentNode = this.head;
        while(currentNode) {
            if(currentIndex === index) return currentNode;
            currentNode = currentNode.next;
            currentIndex ++;
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
        if(this.size===0) {
            this.addAtHead(val)
        }else{
            const index = this.size - 1;
            const tailNode = this.find(index);
            tailNode.next = new Node(val, null);
            this.size++;
        }
    }
    addAtIndex(index, val) {
        if(index <= 0) {
            this.addAtHead(val);
        } else if(index === this.size) {
            this.addAtTail(val)
        } else if(index > this.size) {
            return ;
        } else {
            const prevNode = this.find(index - 1);
            const node = new Node(val, prevNode.next);
            prevNode.next = node;
            this.size++;
        }
    }
    deleteAtIndex(index) {
        if(index < 0 || index > (this.size-1)) {
            return;
        } else if(index === 0) {
            const nextNode = this.head.next;
            this.head.next = null;
            this.head = nextNode;
            this.size--;
        } else {
            const prevNode = this.find(index - 1);
            const currentNode = prevNode.next;
            prevNode.next = currentNode.next;
            currentNode.next = null;
            this.size--
        }
    }
}

export default LinkedList;