function addNumber(a, b) {
    return a + b;
}
const result = addNumber(2, 3);
console.log(result);


// const person = {
//     name: 'Navya',
//     age: 20,
//     mobileNumber: 12345,
//     emailId: 'nav@123'

// }
// console.log(person.name);



const personData = {
    firstName: 'Navya',
    lastName: 'R',
    age: 20, 
    message: 'hello how are you',
    sayHello: function () {

        // return `${this.message} ${this.firstName} 
        
    }
}
console.log(personData.sayHello());

//const messageLength = personData.message.split(' ').length;
//const msgSplit = messageLength.split(' ');
//const count = msgSplit.length;
//console.log(messageLength);
const msgStringReverse= personData.message.split(' ').reverse().join(' ');// reverse string with space
console.log(msgStringReverse);

const messageReverse = personData.message.split('').reverse().join(''); // reverse words in a sentance with space
console.log(messageReverse);

const msgStrRevs = personData.message.replace(/\s/g,''); // just removing a space from a given string 
console.log(msgStrRevs);
//s = space g= global  remove the space

const msgRv = msgStrRevs.split('').reverse().join('');// reverse a string without space
console.log(msgRv);

// write a javascript program to find the occurance of each character in a string 

 let input = 'Hello world'; // given input string
 let charcounts = {};//to store the character count in an object 
 for(let char of input) // loop through each character in the input string crated a char variable in the for loop
 {
    charcounts[char]=(charcounts[char]||0)+1; // if the character alrady ther in string then count +1  
   
 }
 console.log(charcounts);

 
 