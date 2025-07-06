
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class LinkedListQueue {
    constructor() {
        this.front = null
        this.rear = null
        this.size = 0
    }
    enqueue(value){
        const newNode = new Node(value)
        if(this.rear) {
            this.rear.next = newNode
        }
        this.rear = newNode
        if(!this.front){
            this.front = newNode
        }
        this.size ++
    }
    dequeue(){
        if(this.isEmpty()){
            return "queue is empty"
        }
        const dequeuedValue = this.front.value
        this.front = this.front.next
        if(!this.front){
            this.rear = null
        }
        this.size --
        return dequeuedValue
    }
    peek() {
        if(this.isEmpty()){
            return 'queue is empty'
        }
        return this.front.value
    }
    isEmpty() {
        return this.size == 0
    }
    print() {
        let current = this.front
        let result = []
        while(current) {
            result.push(current.value)
            current = current.next
        }
        console.log(result.join(", "));
        
    }
 
}
const queue = new LinkedListQueue()
console.log(queue);
console.log(queue.isEmpty());
queue.enqueue(10)
console.log(queue);
console.log(queue.size);
console.log(queue.isEmpty());
queue.enqueue(100)
queue.enqueue(200)
queue.enqueue(300)
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
queue.enqueue(400)
queue.print()
