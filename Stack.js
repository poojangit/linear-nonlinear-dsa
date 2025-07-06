
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}
class Stack {
    constructor(){
        this.top = null
        this.size = 0
    }
    isEmpty() {
        return this.size == 0
    }
    push(value){
        const newNode = new Node(value)
        console.log(newNode);
        
        if(this.top){
            newNode.next = this.top
        }
        this.top = newNode
        this.size ++
    }
    pop(){
        if(!this.top){
            return "Stack is empty"
        }
        const value = this.top.value;
        this.top = this.top.next
        this.size--
        return value
    }
    peek() {
        return this.top ? this.top.value : "Empty"
    }
    print() {
        let current = this.top
        let result = ""
        while(current) {
            result += current.value + " -> "
            current = current.next
        }
        console.log(result + "null");
    }
}
const stack = new Stack()
console.log(stack);
console.log(stack.isEmpty());
stack.pop()
stack.push(10)
stack.push(20)
console.log(stack);
stack.pop()
console.log(stack.pop());
console.log(stack);
console.log(stack.size);
stack.push(30)
console.log(stack.peek());
stack.push(40)
stack.push(50)
stack.print()








