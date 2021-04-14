/** 
 * 递归是一种需要调用自身的算法，比较容易出错，陷入死循环
 * 编写递归函数需要注意的是要要告诉程序何时停止递归，即分为两部分基线条件和递归条件
 * 递归条件是什么时候调用自己，基线条件是什么时候停止调用自己
 * 递归和循环相比，使用递归会使程序更容易理解，使用循环可能性能会更高一点，选择哪一种方式结合具体情况
 * 栈：栈也是一种数据结构，从栈顶压入或删除元素，是一种后进先出的数据结构
 * 调用栈和递归调用栈
 * */ 
function cutdown(i) {
    console.log(i)
    if(i<=0)return;
    else {
        cutdown(i-1);
    }
}

function factorial(i) {
    if(i > 1) {
        return i*factorial(i-1);
    }else{
        return i;
    }
}

class Stack {
    constructor(){
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        console.log(this.items[this.items.length-1]);
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.pop())
stack.peek()
console.log(stack.isEmpty())
console.log(stack.size())