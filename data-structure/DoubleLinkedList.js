class Node {
    constructor(val, next, prev) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = new Node();
        this.size = 0;
    }
    get(index) {
        let i = 0;
        let cur = this.head;
        while( cur && i != index) {
            cur = cur.next
            i++;
        }
        if(cur) {
            return cur.val;
        } 
    }
    addAtHead(val) {
        const insertNode = new Node(val);
        insertNode.next = this.head;
        insertNode.prev = this.head.prev;
        this.head.prev = insertNode;
        this.head = insertNode;
        this.size++;
    }
    addAtTail(val) {
        const insertNode = new Node(val);
        let cur = this.head;
        while(cur.next) {
            cur = cur.next;
        }
        insertNode.next = cur.next;
        insertNode.prev = cur;
        cur.next = insertNode;
        this.size++;
    }
    addAtIndex(index, val) {
        const insertNode = new Node(val);
        if(index > 0) {
            let i = 0;
            let cur = this.head;
            while(cur.next && index != i) {
                cur = cur.next;
                i++;
            }
            insertNode.next = cur;
            insertNode.prev = cur.prev;
            cur.prev = insertNode;
            this.size++;
        }
    }
    deleteAtIndex(index){
        if(index < 0 || index >= this.size ) return;
        let i = 0;
        let cur = this.head;
        while(cur && i != index) {
            cur = cur.next;
        }
        cur.next.prev = cur.prev;
        cur.prev.next = cur.next;
        this.size--;
    }
}