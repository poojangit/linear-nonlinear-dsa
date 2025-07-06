
class Node{
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }
}
class DoublyLinkedList{
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    getSize() {
        return this.size
    }
    append(data){
        let newNode = new Node(data)
        if(this.head === null){
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.size ++
    }
    prepend(data){
        let newNode = new Node(data)
        if(this.head === null){
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.size++
    }
    displayForward(){
        let current = this.head
        let result = " "
        while(current !== null){
            result += current.data + " <=> "
            current = current.next
        }
        console.log(result + "null");
    }
    displayBackward(){
        let current = this.tail
        let result = " "
        while(current !== null){
            result += current.data + " <=> "
            current = current.prev
        }
        console.log(result + "null")
    }
    delete(data){
        if(this.head === null){
            return 
        }
        if(this.head.data === data){
            this.head = this.head.next
            if(this.head !== null){
                this.head.prev = null
            }else{
                this.tail = null
            }
            this.size--
            return
        }
        if(this.tail.data === data){
            this.tail = this.tail.prev
            if(this.tail !== null){
                this.tail.next = null
            }else{
                this.head = null
                return
            }
        }
        let current = this.head
        while(current !== null && current.data !== data){
            current = current.next
        }
        if(current === null){
            return
        }
        current.prev.next = current.next
        current.next.prev = current.prev
        this.size--
    }
}
const linkedList = new DoublyLinkedList()
console.log(linkedList)
console.log(linkedList.getSize())
linkedList.append(10)
linkedList.append(20)
linkedList.append(30)
linkedList.append(40)
linkedList.prepend(1)
linkedList.prepend(2)
linkedList.prepend(3)
console.log(linkedList)
linkedList.displayForward()
linkedList.displayBackward()
linkedList.delete(10)
linkedList.delete(100)
linkedList.displayForward()