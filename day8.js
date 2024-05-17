/*
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes


-> classes in js are not hoisted. 
-> a class can be defined in two ways: a class expression or a class declaration.
-> The main difference between a class expression and a class declaration is the class name, which can be 
omitted in class expressions to create anonymous classes.

-> Class expressions allow you to redefine classes, while
 redeclaring a class using class declarations throws a SyntaxError
->The body of a class is executed in strict mode even without the "use strict" directive.
class expression :

const rectangle = class{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }

    area(){
        return this.height* this.width;
    }
}

class Declaration:
-> The class declaration creates a binding of a new class to a given name.
-> class declarations have the same temporal dead zone restrictions as let or const and behave as if they are not hoisted.
class Polygon {
  constructor(height, width) {
    this.area = height * width;
  }
}



*/

class rect{
    constructor(h,b){
        this.h=h;
        this.b=b
    }
    
    // constructor(n,b,a){  SyntaxError: A class may only have one constructor
    //     this.n=n;
    //     this.b=b,
    //     this.a=a
    // }


}


// --------------------Static initialization blocks
/*

-> Static initialization blocks are declared within a class. It contains statements to be evaluated during class initialization
-> A class can have any number of static {} initialization blocks in its class body.
-> Any static initialization of a super class is performed first, before that of its sub classes.
->  Note however that it is a syntax error to call super() in a class static initialization block,


note : static block
The scope of the static block is nested within the lexical scope of the class body, and 
can access private names  declared within the class without causing a syntax error.

->with static initialization block
class ClassWithSIB {
  static {
    // …
  }
}

->without static initialization block
Without static initialization blocks, complex static initialization might be achieved by calling a static method after the class declaration:
class MyClass {
  static init() {
    // Access to private static fields is allowed here
  }
}

MyClass.init();


*/

// class rectangle{
//     #privateField=9;
//       constructor(l,b){
//           this.l=l
//           this.b=b;
//       }
//     static fun(){
//         console.log(this.privateField)
//     }
//   }
  
//   let r1= new rectangle(3,4);
//   rectangle.fun()

        
  // don't know what is wrong
//   class Example {
//     #privateField = "Hello"; // Private field
//     constructor(str){
//         this.#privateField=str;
//     }
//      func(ex) {
//       console.log(ex.#privateField); // Accessing private field within static block
//     }
//   }

//   let exx= new Example('sushant')
//   const ex2= new Example('sss');

//   ex2.fun(exx);
  

// let r1= new recta(1,4)
// console.log()




// class MyClass {
//     static field1 = console.log("static field1");
//     static {
//       console.log("static block1");
//     }
//     static field2 = console.log("static field2");
//     static {
//       console.log("static block2");
//     }
//   }



  //------------- this and super-------------

  /*
  ->The super.property syntax can be used inside a static block to reference static properties of a super class.
  */


  class Person {
    name;
    age;
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    teach(){
        console.log('teaching')
    }
  }
  
  class Professor extends Person {
    name = `Professor ${this.name}`;
  }

  let p=new Professor('john',20);
  p.teach()


  // ----------------- bindiing this with the instance -------
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#binding_this_with_instance_and_static_methods