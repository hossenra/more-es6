class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback.`)
    }
}


class Instructor extends TeamMember{
   
    designation = 'Web Course Instructor'
    team = 'Web team'
    constructor(name, location){
      super(name, location);  
    }
    startSupportSession(time){
       console.log (`start the support session at ${time}`)
    }
    creatQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
}

class Developer extends TeamMember{
    designation = 'Web Course Instructor'
    team = 'Web team'
    tech;
    constructor(name, location, tech){
        super(name, location);
        this.tech = tech;
    }
    developFeature(feature){
       console.log (`please develop the ${feature}`)
    }
    release(version){
        console.log(`please release the version ${version}`)
    }
}

class jobPlacement extends TeamMember{
    designation = 'job placement Comandos'
    team = 'job Placement'
    region;
    constructor(name, location, region){
        super(name, location);
        this.region = region;
    }
    provideResume(feature){
       console.log (`please develop the ${feature}`)
    }
    prepareStudent(version){
        console.log(`please release the version ${version}`)
    }
}

const Alia = new Developer('Alia Bhatt', 'Dhaka', 'React');
// console.log(Alia);
// Alia.provideFeedback();
const Razibul = new jobPlacement('Razibul Hossen', 'Berlin', 'Germany');
console.log(Razibul);
Razibul.provideFeedback();