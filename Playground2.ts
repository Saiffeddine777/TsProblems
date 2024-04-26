
type Job = "scientific"|"Arts"|"Administrative"|"Medical"
type PersonJson = {firstName :string , lastName :string , age :number ,job? :string}
class Person <T extends string>{
   
   firstName : string;
   lastName : string ;
   age :number;
   job :T


  constructor(firstName :string , lastName :string , age :number  , job:T){
       this.firstName = firstName;
       this.lastName = lastName;
       this.age= age;
       this.job = job
  }
   
  public describe():string{
    return `${this.firstName} ${this.lastName} he is ${this.age} years old he works the ${this.job} field.`
  }

  public toJson ():PersonJson{
       return {
          firstName: this.firstName,
          lastName:this.lastName,
          age: this.age ,
          job: this.job
       }
  }

}

const Jeff :Person<Job> = new Person("Jeff" ,"bezos" ,45 , "Administrative")




class Doctor  extends Person <"Medical">{


      constructor(firstname :string , lastName :string , age :number  ){
        super(firstname,lastName, age , "Medical");
      }
    }



const Idriss: Doctor = new Doctor("Idriss" , "ElHamidi" , 55)



console.log(Idriss.toJson())