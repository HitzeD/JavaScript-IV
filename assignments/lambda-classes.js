class Person {
    constructor(obj){
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
    }
    speak(){
        console.log(`Hello, my name is ${this.name}. I am from ${this.location}!`)
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

class ProjectManager extends Instructor{
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

// TEST OBJECTS

const int1 = new Instructor({
    name: "george",
    age: 22,
    gender: '?',
    favLanguage: 'JavaScript',
    specialty: 'cloud',
    catchPhrase: 'Jumping Beans!'
});

const int2 = new Instructor({
    name: "jim",
    age: 44,
    gender: 'F',
    favLanguage: 'Swift',
    specialty: 'things',
    catchPhrase: 'Looking Beans!'
});

const int3 = new Instructor({
    name: "tom",
    age: 71,
    gender: 'M',
    favLanguage: 'Python',
    specialty: 'stuff',
    catchPhrase: 'Special Beans!'
});

const stu1 = new Student({
    name: "exacto",
    age: 4,
    location: 'Craft room',
    gender: '?',
    favLanguage: 'babble',
    specialty: 'not walking',
    catchPhrase: 'Touch?'
});

const stu2 = new Student({
    name: "sun",
    age: 2,
    gender: 'F',
    favLanguage: 'c++',
    specialty: 'engineer',
    catchPhrase: 'climbing Beans!'
});

const stu3 = new Student({
    name: "moon",
    age: 1,
    gender: '?',
    favLanguage: 'Django',
    specialty: 'software',
    catchPhrase: 'computing Beans!'
});

const pm1 = new ProjectManager({
    name: "artic",
    age: 22,
    gender: '?',
    favLanguage: 'JavaScript',
    specialty: 'teaching',
    catchPhrase: 'learning Beans!'
});

const pm2 = new ProjectManager({
    name: "oscar",
    age: 32,
    gender: '?',
    favLanguage: 'objective c',
    specialty: 'who knows',
    catchPhrase: 'questioning Beans!'
});

const pm3 = new ProjectManager({
    name: "link",
    age: 72,
    gender: 'M and only M',
    favLanguage: 'Hyrule',
    specialty: 'Water Temple',
    catchPhrase: 'Do not hit those chickens!'
});

// TEST STATEMENTS

console.log(stu1.speak());
console.log(pm2.debugCode(stu3, 'Advanced CSS'));
console.log(int3.grade(stu1, 'Science'));
console.log(pm3.standup('web19_help'));
console.log(stu3.sprintChallenge('Javascript'));