

interface Person {
    name? :string;
    age? :number
}

type PartialPerson = Partial<Person>


type RequiredPerson = Required<Person>

type PickPerson = Pick<Person, "age">

type OmitPerson = Omit<Person,"age">


const ErrorMessages = {
    InvalidEmail: "Invalid email",
    InvalidPassword: "Invalid password",
  } as const;
  
  // This will throw an error
//   ErrorMessages.InvalidEmail = "New error message";