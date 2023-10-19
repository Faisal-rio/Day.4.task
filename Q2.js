//Iteratio of JSON (for in) ; 
           
const obj = {
    "name": "Hisan",
    "age": 13,
    "city": "kerala",
    "role": "football player"
  };
  
  for (const key in obj) {
    const value = obj[key];
    console.log(key + ": " + value);
  }
  

//Iteratio of JSON (for of) ;

const arr = ['apple','liche','cherry'];
const obj = {} ;
for (const value of arr ) {
    obj[value] = 'value';
} 
const objstring = JSON.stringify(obj);
console.log(objstring);


//Iteratio of JSON (for) ;

const object = {
    "name": "Hisan",
    "age": 13,
    "city": "kerala",
    "role":"footbal player"
};
const keys = Object.keys(object);

for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = object[key];
    console.log(key + ": " + value);
}




      