// syntactic sugar
class Instructor{
    name;
    designation = 'Web Course Instructor'
    team = 'Web team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
       console.log (`start the support session at ${time}`)
    }
    creatQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
}
const aamir = new Instructor('aamir', 'Dhaka');
console.log(aamir);
aamir.startSupportSession('9.00');
aamir.creatQuiz(60);

const solaiman = new Instructor('solaiman khan', 'Barishal');
console.log(solaiman);
