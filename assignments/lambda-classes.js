class Person {
    constructor(obj){
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
    }
    speak(){
        console.log(`Hello, my name is ${this.name}. I am fomr ${this.location}!`)
    }
} // Person

