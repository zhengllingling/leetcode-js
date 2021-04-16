/** 
 * 图模拟一组链接，有节点和边组成，一个节点可与多个节点相连，这些节点被称为邻居
 * 广度优先搜索是一种用于图的查找算法，解决最短路径问题
 * 队列是一种先进先出的数据结构，可用于实现广度优先搜索
 * */ 
class Queue {
    constructor(){
        this.arr = [];
    }
    addqueue(item) {
        this.arr.push(item)
    }
    delqueue() {
        return this.arr.shift()
    }
    head(){
        return this.arr[0]
    }
    tail(){
        return this.arr[this.arr.length - 1]
    }
    size(){
        return this.arr.length;
    }
    isEmpty(){
        return this.arr.length === 0
    }
    clear(){
        this.arr = []
    }
}

const data = [
    {
        key: '1',
        value: 1,
        children: [
            {
                key: '3',
                value: 1
            },
            {
                key: '4',
                value: 1
            }
        ]
    },
    {
        key: '2',
        value: 1,
        children: [
            {
                key: '3',
                value: 1
            },
            {
                key: '5',
                value: 1,
                children: [
                    {
                        key: '4',
                        value: 1
                    }
                ]
            }
        ]
    }
]
// /** 
//  * 使用队列实现广度优先搜索算法，算出1-4的最短距离
//  * */ 

// function bfs(arr, target) {
//     const queue = new Queue();
    
// }