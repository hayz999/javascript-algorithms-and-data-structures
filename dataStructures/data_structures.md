# Data Structures

## Which data structure is best?
- what do they do?
  - data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data
- why are there so many?
  - different data structures excel at different things.  some are highly specialized, while others (like arrays) are more generally used
- why care?
  - the more time you spend as a developer, the more likely you'll need to use one of these data structures
- there is no one best data structure
- they all excel in different situations

## Class Syntax
- define a new class for every data structure
- a class is a blueprint for creating objects with pre-defined properties and methods
- the method to create new objects must be called constructor
- the class keyword creates a constant, so you can not redefine it
```javascript
class Example {
  constructor(item1, item2) {
    this.item1 = item1
    this.item2 = item2
  }
  
  // instance method
  exampleMethod() {
    return "I can be used by instances!"
  }
  // class method
  static classMethodExample() {
    return "I can only be used in this class, not by instances!"
  }
}

let firstExample = new Example("foo", "bar")
firstExample.exampleMethod()
Example.classMethodExample()
```
