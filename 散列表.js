/** 
 * 散列函数：将输入映射为数字，不同的输入映射不同的索引，相同的输入映射相同的索引
 * 数组+散列函数可形成一个散列表 用于模拟映射关系
 * 散列表由键和值组成 js中的对象(pthyon dict函数)
 * 有可能不同的输入映射到了相同的索引上，这种情况就叫冲突。
 * 解决冲突的办法就是在有冲突的索引处存储一个链表
 * 如果冲突的次数很多会创建很长的链表，从而会降低查找的性能
 * 所以要尽量避免冲突，为减少冲突，散列函数很重要
 * 
 * 平均情况下，散列表的查找、插入、删除的时间复杂度是O(1)
 * 在最糟糕的情况下，散列表的查找、插入、删除的时间复杂度是O(n)
 * 避免最糟糕的情况就需要避免冲突，这就需要较低的填装因子和良好的散列函数
 * 
 * 填装因子 = 散列表包含的元素数/位置总数
 * 填装因子度量的是散列表中有多少位置是空的
 * 填装因子越低，发生冲突的可能性就越低
 * 当填装因子升高，就需要考虑调整散列表的长度
 * 
 * 模拟映射关系
 * 防止重复
 * 缓存/记住数据
 * */

// 实现一个简单的创建散列表的类

const SingleList = require('./数组和链表');

class HashMap {
    constructor(size) {
        this.size = size;
        this.listArr = new Array(size);
        for(let i = 0; i < size; i++) {
            this.listArr[i] = new SingleList();
        }
    }
    
    add(item) {
        const index = this.hashFun(item.id);
        this.listArr[index].append(item)
    }

    find(id) {
        const index = this.hashFun(id);
        const result = this.listArr[index].find(id, 'id');
        return result;
    }

    hashFun(id) {
        return id % this.size;
    }
}

const hashMap = new HashMap(10);

hashMap.add({
    id: 1,
    name: "测试1"
});
hashMap.add({
    id: 2,
    name: "测试2"
});
hashMap.add({
    id: 3,
    name: "测试3"
})
hashMap.add({
    id: 4,
    name: "测试4"
})
hashMap.add({
    id: 5,
    name: "测试5"
})

console.log(hashMap.find(5));