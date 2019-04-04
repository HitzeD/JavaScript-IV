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

class Instructor extends Person {
    constructor(obj){
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}.`)
    }

    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}!`)
    }
} // Instructor instanceof Person

class Student extends Person{
    constructor(obj){
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
    }

    listsSubjects(){
        console.log(this.favSubjects);
    }

    prAssignments(subject){
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
} // Student instanceof Person

class ProjectManager extends Intructor{
    constructor(obj){
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }

    standup(channel){
        console.log(`${this.name} announces to ${channel}, @channel standby times!`);
    }

    debugCode(obj, subject){
        console.log(`${this.name} debugs ${obj.name}'s code on ${subject}`);
    }
} // Project Manager instanceof Instructor