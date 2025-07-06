
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null
    }

    append(data) {
        const newNode = new Node(data)
        if (this.head === null) {
            this.head = newNode
            return
        }
        let current = this.head
        if(current.next !== null){
            current = current.next
        }
        current.next = newNode
    }
    prepend(data){
        const newNode = new Node(data)
            newNode.next = this.head
            this.head = newNode
    }
    delete(data){
        if(this.head === null){
            console.log("List is empty");
            return
        }
        if(this.head.data === data){
            this.head = this.head.next
            return
        }
        let current = this.head
        while(current.next !== null && current.next.data !== data) {
            current = current.next
        }
        if(current.next === null){
            console.log("Node not found");
            return
        }
        current.next = current.next.next
        
    }
    display() {
        let current = this.head
        let listofValues = []
        while(current !== null){
            listofValues.push(current.data)
            current = current.next
        }
        console.log(listofValues.join(" -> "));
        
    }
}

const singlyList = new SinglyLinkedList()
console.log(singlyList);
singlyList.display()
singlyList.delete(10)
singlyList.display()
singlyList.append(10)
singlyList.display()
singlyList.delete(50)
singlyList.display()
singlyList.delete(70)
singlyList.display()
singlyList.append(20)
singlyList.display()
singlyList.delete(20)
singlyList.display()
console.log(singlyList);
singlyList.prepend(30)
singlyList.display()
console.log(singlyList);
