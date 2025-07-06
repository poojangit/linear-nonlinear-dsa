
class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}
class CircularLinkedList {
    constructor(){
        this.head = null
        this.tail = null
    }
    append(data){
        const newNode = new Node(data)
        if(this.head === null) {
            this.head = newNode
            this.tail = newNode
            this.tail.next = this.head
       
        } else {
            this.tail.next = newNode
            this.tail = newNode
            this.tail.next = this.head
        }
    }
    display(){
        if(this.head === null){
            console.log("List is empty")
            return
        }
        let current = this.head
        let result = []
        do {
            result.push(current.data)
            current = current.next
        }
        while(current !== this.head)
            console.log(result.join(" => " ),"->" ,this.head.data)
    }
    delete(data){
        if(this.head === null){
            console.log("List is empty")
            return null
        }
        let current = this.head
        let prev = this.tail
        do{
            if(current.data === data){
                if(current === this.head){
                    this.head = this.head.next
                    this.tail.next = this.head
                }
                else if(current === this.tail){
                    this.tail = prev
                    this.tail.next = this.head
                }
                else {
                    prev.next = current.next
                }
                console.log(`Deleted the node with data ${data}` )
                return
            }
            prev = current
            current = current.next
        } while(current !== this.head)
            console.log(`Node with data ${data} not found`)
    }
}
const circleList = new CircularLinkedList()
console.log(circleList)
circleList.delete(10)
circleList.append(10)
circleList.append(20)
circleList.append(30)
circleList.append(40)
console.log(circleList);
circleList.delete(10)
circleList.delete(20)
circleList.delete(60)
circleList.display()
