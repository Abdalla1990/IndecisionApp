class Person {

    constructor(name = 'Anonumous', age = 0, occupation = 'default'){
        this.name = name ;
        this.age = age ;
        this.occupation = occupation;
    }
    greetings(){
        return `Hi ${this.name}`;
    }
    description(){
        return `I am ${this.name}, My Age is ${this.age} and I work as a ${this.occupation}`
    }
}






class Student extends Person{
    constructor(name,age,occupation,course){
       super(name,age,occupation);
       this.course  = course;
    }

    hasCourse(){
        return !!this.course
    }
    description(){
        let ParentDes = super.description();
        if(this.hasCourse()){
            console.log(' inside ' ,this.hasCourse() )
            ParentDes+= `BTW I Am taking a ${this.course} class ! `
        }
        return ParentDes;
    }
}
const abdalla = new Student('abdalla',27,'web developer','hi there ');

console.log(abdalla.description())

