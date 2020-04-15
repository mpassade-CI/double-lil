const Node = (value) => {
  return {
    value,
    next: null,
    previous: null,
  }
}


const Lil = () => {
  return {
    head: null,
    tail: null,

    addToStart: function(value) {
      const newNode = Node(value);

      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode
        return;
      }

      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;

    },

    addToEnd: function(value) {
      const newNode = Node(value);

      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;

        return;
      }
      
      newNode.previous = this.tail;
      this.tail.next = newNode
      this.tail = newNode

    },
    
    removeFromStart: function() {
      const toBeRemoved = this.head.value;
      this.head = this.head.next;

      return toBeRemoved;
    },

    removeFromEnd: function() {
      const toBeRemoved = this.tail.value;
      this.tail = this.tail.previous
      this.tail.next = null;

      return toBeRemoved;
    },

    getAt: function(i) {
      if (this.head === null) {
        return null;
      }

      let count = 0;
      let current = this.head;

      while (count < i) {
        current = current.next;
        count++;
      }

      return current.value;
    },

    removeAt: function(i) {
      if (this.head === null) {
        return null;
      }

      let count = 0;
      let current = this.head;

      while (count < i - 1) {
        current = current.next;
        count++;
      }

      const toBeRemoved = current.next;
      const oneAfter = current.next.next;
      const removedValue = toBeRemoved.value;
      
      current.next = oneAfter;

      return removedValue;
    },
  }
}






if (typeof Node === 'undefined') {
  Node = undefined;
}

if (typeof Lil === 'undefined') {
  Lil = undefined;
}


module.exports = {
  Lil,
  Node,
}