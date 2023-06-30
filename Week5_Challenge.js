class Person {  
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(person){
    if(person.age == 31){
      return `${person.name} is the same age as me.`;
    }
    else if(person.age > 31){
      return `${person.name} is older than me.`;
    }
    else{
      return `${person.name} is younger than me.`;
    }
  }
}
