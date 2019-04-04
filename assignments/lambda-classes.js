// Stretch Addition
function gradePapers(int2, stu3){
    do{
        int2.grading(stu3);
    }
    while(stu3.grade < 70);
    return stu3.graduate();
};

// Main Assignment

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

    grading(obj){
        if((Math.floor(Math.random() * 10) * Math.floor(Math.random() * 10)) < 20){
            obj.grade -= 10;
            return obj.grade;
        } else {
            obj.grade += 20;
            return obj.grade;
        }
        //(Math.random() * 10)
    }
} // Instructor instanceof Person

class Student extends Person{
    constructor(obj){
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
        this.grade = obj.grade;
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

    graduate(){
        if(this.grade > 70){
            console.log(`Congrats, ${this.name}, you have finished ${this.specialty}!`);
        } else {
            console.log(`We're sorry ${this.name}, but you have not passed ${this.specialty} until you have a 70%!`);
        }
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
    grade: (Math.floor(Math.random() * 10) * Math.floor(Math.random() * 10)),
    location: 'Craft room',
    gender: '?',
    favLanguage: 'babble',
    specialty: 'not walking',
    catchPhrase: 'Touch?'
}); // random generate grade!!!

const stu2 = new Student({
    name: "sun",
    age: 2,
    grade: 90,
    gender: 'F',
    favLanguage: 'c++',
    specialty: 'engineer',
    catchPhrase: 'climbing Beans!'
});

const stu3 = new Student({
    name: "moon",
    age: 1,
    grade: 69,
    specialty: 'Ergonomics',
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

stu1.speak();
pm2.debugCode(stu3, 'Advanced CSS');
int3.grade(stu1, 'Science');
pm3.standup('web19_help');
stu3.sprintChallenge('Javascript');
console.log(stu2.grade);
console.log(int2.grading(stu2));
stu3.graduate();
console.log(stu3.grade);
int2.grading(stu3);
console.log(stu3.grade);
gradePapers(int2, stu3);
