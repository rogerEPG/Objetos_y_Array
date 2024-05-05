//1__________________________
const citizen1 = { name: "Roger", lastname: "Padilla", age: 40 };

//2_________________________
citizen1.city = "Caracas";
citizen1.age = "18";
console.log(citizen1.age);

//3___________________________

function checkCitizenship(citizen1) {
  if (citizen1.age > 18) {
    return console.log((citizen1.canVote = true))
  } else {
    return console.log((citizen1.canVote = false))
  }
}

checkCitizenship(citizen1)

// 4__________________________

function createCitizen(name, lastname, age){
  if(Object.hasOwn(citizen1, name) && Object.hasOwn(citizen1, lastname) 
    && Object.hasOwn(citizen1, age)){
    
    let newArray = Object.entries(citizen1)
    newArray.pop()
    newArray.pop()
    let newObject = Object.assign({}, newArray )
    return console.log(newObject);
  } 

}

createCitizen("name", "lastname", "age")
 