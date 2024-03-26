 // //console.log('TK');
// // let name;                 // this is undefined not define name
// // console.log(name);

// // let name = "navya";
// // console.log(name);

// // let firstName='navya';
// // lastName='bhavya';     //don't use the space or hyphen
// // console.log(firstName);
// // console.log(lastName);


// //let lastName;   //can not start with number 
// //  variable is meanifull
// // can not use reserver keywords//  for example lastName,or let

// //this is constent

// //let num =445; // 500 or 
// //console.log(num);


// // Data Types in javaScript


// // let myName = 'navya';
// // console.log(myName);

// // // Number

// // let mobileNumber = 9008921729;
// // console.log(mobileNumber);


// // boolean
// //   let person =true;
// //   console.log(person);

// //   let a= false;
// //   console.log(a);


// // null
// // let b=null;
// // console.log(b);



// //let undefined;
// //console.log(undefined);   //   not store in the value


// // Array

// // let array = ["apple","banana","mango"];
// // console.log(array);


// // let person =["orange","apple",'kiwi'];
// // console.log(person);

// // let myFruits =["apple","kiwi","apple"];
// // console.log(myFruits);

// // let a = [5,5,6,7,"apple","banana"];
// // console.log(a);


// // //Object literals;

// // let studentMarks={
// //     navya:50,
// //     dob:60,
// //     b:70
// // };
// // console.log(studentMarks);



//    // functions

// //    function add(){

// //    }
// //    console.log(add);


//     // javaScript oparators
//  // addition
//     // let d = 10;
//     // let b = 20;
//     // let c = d + b;
//     // console.log(c);

//     // //subtration
//     // let x = 50;
//     // let y = 30;
//     // let z = x - y;
//     // console.log(z);

//     // //division

//     // let s =100;
//     // let t =50;
//     // let u =s / t;
//     // console.log(u);

//     // //increment

//     // let m =90;
//     // let n = 20;
//     // let sum = m + + n;
//     // console.log(sum);

//     // //assignment oparator

//     // let p =5;
//     // p+=2;
//     // console.log(p);

//     // //or

//     // let q =20;
//     // console.log(q/=2); // %, *, **;
     

//     // logical oparators


//     //let age = 35;
//     //if (age >=18 && age<=40){
//       //  console.log("valid");
//    // }

//     //let age =50;
//     //if (age >=30 && age<=80){
//       //  console.log( "invalid");
//     //} 

//    // let age =35;
//     //if (age >=18 || age<=40){
//       //  console.log("valid");

//     //}

//     // not !
//    // let a = 10
//     //console.log(a<=5);

//     let a = 20;
//     console.log(!a<=5);
//     // javaScript  uses ... for both the rest and spread oparator 
//     // but these two oparators not same 
//     //rest oparator puts the rest or some specific user supplied values into a javaScript array 


//     //  but the spread syntax expands itarables into individual elements 
//     //example  rest oparator
//  function myBio(firstName,lastName,...otherInfo){
//  return ` ${firstName} ${lastName} `+ otherInfo ;
//  }
//  //myBio('srinivasa','tk',21,'kolar',"engineering")
//  console.log(myBio('srinivasa','tk',21,'kolar',"engineering"));

//  // example for  spread oparator
// //  the spread oparator helps you expand itarables into individual element 

//  //const myName =["tk","srini","babu","navya"];
//  //const otherNames =["venky","ravi","rani",...myName,"bhavya"];
//  //console.log(otherNames);

//  const myValue =[1,2,3,4,5,6];
//  const myNumber =[...myValue,7,8,9,10];
//  console.log(myNumber);

//  let age =17;
//  if (age >=18){
//   console.log('valid');
//  }
//  else 
//  {
//   console.log(" invalid");
//  }

//  var time = 17;
//  if (time <12){
//   console.log('morning');
//  }
//  else if (time <16){
//   console.log("goodafternoon");
//  }
//  else {
//   console.log("goodevening");
//  }

//  // if statement to specify a block of javaScript code to be executed if condition is true 
//  // else if  statement to specify a new condition if the first condition is false 
//  //else false use the else statement to specify a block of code to be executed if condition is false
 
//  // for loop
// //  for (let i = 0; i<=10; i++) {
// //   if (i==5){
// //     continue;
// //   }
// //   console.log(i);
  
// //  }
//  // breaks the loop if condition satisfy (true)
//  //continue statement jumps over 1 itaration in the loop 

// //  for (let a = 1; a<=20; a++){
// //   if (a==10){
// //     break;
// //   }
// //   console.log(a);
// //  }

//  for (let x = 0; x<=30; x++){
//   if (x==20){
//     continue;
//   }
//   console.log(x);
  
//  }



//  // push
//  let fruit =['apple','banana'];
//  fruit.push('cherry');
//  console.log(fruit);

//  //pop

//  let num =[1,2,3,4,5,6];
//  let lastNumber = num.pop(); 
//  console.log(num);


//  //splice

//  let name =[ 'banana','apple'];
//  name.splice(0 ,2,'kiwi');
//  console.log(name);

//  //filter
//  let number =[1,2,3,4,5,6];
//  let oddNumber = number.filter(num => 
//   {
  
//     return num % 2 !==0  //output [1,3,5]
//   } );
//  console.log(oddNumber);


let num = [ 10,20,30,40,50];
let evenNumber = num.filter(num =>
  {
    return num % 2 ===0
  });
  console.log(evenNumber);
//  //-----Concat----

//  let fruit1 = ['apple','banana'];
//  let fruit2 =['orange','cherry'];
//  let combinedFruit =fruit1.concat(fruit2);
//  console.log(combinedFruit);

//  //join all elements of an array into string
//   let joinedString = combinedFruit.map(fruit =>`[${fruit}]`).join(',');
//   console.log(joinedString);

//   // reverse method reverses the order of the elements in an array
  
//   fruit1.reverse()
//     console.log(fruit1);

//     // some method checks if an array element pass a test (provided as a callback function)

//     // some method returns true (and stops ) if the function returns true one of the array elements

//     fruit1.some(checkBanana);
//     function checkBanana(){
//       return 'banana';
//     }  
//     // const ages =[3,10,7,18,20];
//     //  let chcage =ages.some(checkAdult);
//     // function checkAdult(age){
//     //   return age>20;
//     // }
//     // console.log(chcage);


//     const ages =[10,7,18,20];
//      let chcage =ages.every(checkAdult);
//     function checkAdult(age){
//       return age<20;
//     }
//     console.log(chcage);

//     let forMonth =6;
//     let monthName;
//     switch(forMonth)
//     {
//       case 1:
//         monthName ='january'
//         break;
//         case 2:
//           monthName ='febuary'
//           break;
//           case 3 :
//             monthName ='march'
//             break;
//             case 4 :
//               monthName ='april'
//               break;
//               default:
//                 monthName ='invalid monthName'
//     }
//     console.log(monthName);



    let listOffruit =2;
    let fruitName;
    switch(listOffruit)
    {
      case 0:
        fruitName ='mango'
        break;
        case 1 :
          fruitName ='apple'
          break;
          case 2 :
            fruitName ='banana'
            break;
            default:
              fruitName = 'invaild fruitName'
        
    } 
    console.log(fruitName);
    //  switch statement perform different actions based on different conditions
    
    
//enums used to represent a fixed set of name values (list of named const)
const daysOfweek = Object.freeze(
  {
    sunday :0,
    monday :1,
    tuesday :2,
    wednesday :3,
    thursday :4,
    friday :5,
    saturday :6
    
  }
);
console.log(daysOfweek.thursday);

let numberOfMonths = Object.freeze(
  {
    January : 1,
    Febuary :2,
    March : 3,
    April : 4

  }
);
console.log(numberOfMonths.March);

let myName = Object.freeze(
{
 Navya : 0,
 Bhavya : 1,
Venky : 2,
Navi :3,
Srini: 4
}
);
console.log(myName.Bhavya);



// class  is a blueprint for creating objects with shared properties and methods.
// introduction of class in ecmascript (ES6) brought a mode struterd and familiar syntax 
// for dufining object oriented programming concepts

// or class is combination of  properties(name,age) and methods (myName) 
// we can create an object using class 
// main topics are class,constructor,this keyword,creating object,accessing object

class Person  { // here person is the class name or name of the class
  constructor(name,age){  // constructor is used to creat object(initialize) 
    this.name1 = name; // this refors to current context(class name person)
    this.age1 = age;
  }
  myName(){ // my name is method in a person class
    console.log(`my Name is ${this.name1} my age is ${this.age1}`);
    // this keyword is a special key word that refors to the current exectuion context
  }
}
 var myDetails= new Person();// here we are creating object name  (myDetails)
//by using new keyword
 //console.log('name : '+ myDetails.name +' age : '+ myDetails.age);
   myDetails.name1='srini';
   myDetails.age1=21;
  console.log(`${myDetails.name1} ,`);
  console.log(` ${myDetails.age1}`);
 
 // a constructor is a special method used for initializing(creating) objects created with a class 
 // the constructor method is called automatically when a new instance (object) of the class is created
 // using the new keyword 

 myDetails.myName();

 class Car{
  constructor(carName,carColor){
    this.cName = carName;
    this.cColor = carColor;
  }
  carSpeed(){
    console.log(`the car ${ this.cName} the car speed is 100km/hr`);
  }
 }
 let myCar = new Car('BMW','White');
 myCar.carSpeed();
 console.log(`${myCar.cName}  ${myCar.cColor}`);

//Create an student class and it's properties (studentRollNumber,
// studentName, studentContactNumber, studentMailId, studentAddress,
// studentFatherName, studentDateodBirth, studentGender)





class Student { 
  constructor(sRollNumber,sName, dateofBirth,mailId,contactNumber,Address,FatherName){  
   this.sRollNumber = sRollNumber;
    this.sName = sName; 
    this.dateofBirth = dateofBirth;
    this.mailId = mailId;
    this.contactNumber = contactNumber;
    this.Address = Address;
    this.FatherName = FatherName;
    
  }
  
   }
    let srinivasaObj = new Student(1,'Srinivasa','14/05/2001','srinivasababu.tk@gmail.com',7022136941,'Kolar','Kondappa');
    let babuObj = new Student(2,'Babu','11/05/2000','babu.tk@gmail.com',9449236941,'Bangalore','TV');
    let navyaObj = new Student(3,'Navya','12/02/2003','navya.r@gmail.com',9008921729,'Kolar','Ravanappa');

    let dob = new Date();
    //dob.setFullYear(2003,1,12);
    console.log(dob);

    console.log(`${srinivasaObj.sRollNumber} , ${srinivasaObj.sName} , ${srinivasaObj.dateofBirth} , ${srinivasaObj.mailId} , ${srinivasaObj.contactNumber} , ${srinivasaObj.Address} , ${srinivasaObj.FatherName}`);
    console.log(`${babuObj.sRollNumber} , ${babuObj.sName} , ${babuObj.dateofBirth} , ${babuObj.mailId} , ${babuObj.contactNumber} , ${babuObj.Address} , ${babuObj.FatherName}`);
    console.log(navyaObj.sRollNumber+`  , ${navyaObj.sName} , ${navyaObj.dateofBirth} , ${navyaObj.mailId} , ${navyaObj.contactNumber} , ${navyaObj.Address} , ${navyaObj.FatherName}`);
 //console.log(`${studentDetails.name} ${ studentDetails.dateofBirth} ${studentDetails.Address} ${studentDetails.mailId}  ${studentDetails.contactNumber} ${studentDetails.FatherName} `);
  

 // inheritance is to create derive (chiled) class by using base (parent)class is called inheritance
 // obtaining properties from other class is called inheritence 

 // to create a class inheritance , use the extends keyword 

 //base class (super class)
// class Animal{  // base class(parent class)
 
//   constructor(name){ 
  
//     this.name= name; //base class property name 

//   }
//   sayHello(){  // base class method sayHello
//     console.log(`hello I am ${this.name}`);
//   }
// } 
// // chiled class// using extends keyword to inheirt Derive class (sub class) //Dog is inherited from Animal
// class Dog extends Animal{
//   constructor(name,breed){
//     super(name);
//     this.breed = breed;
//   }
//   bark(){
//     console.log('bow bow');

//   }

// }
// // creating instances (object) of the class
// let myAnimal = new Animal('village dog');
// let myDog = new Dog('Ramu','naati');
// myAnimal.sayHello();
// myDog.sayHello();
// myDog.bark(); 

// class Fruit{
//   constructor(fruitName){
//     this.fruitName = fruitName;
//   }
//   myFruit(){
//     console.log(`hello I am ${this.fruitName}`);
//   }
// }
// class Apple extends Fruit{
//   constructor(fruitName,fruitColor){
//     super(fruitName);
  
//     this.fruitColor = fruitColor;
//   }
//   taste(){
//     console.log(`${this.fruitName} sweet and Color is ${this.fruitColor} `);

//   }

// }
// let myFruit = new Fruit('orange');
// let myApple = new Apple('kiwi','green');

// myFruit.myFruit();
// myApple.taste();







class Female{
  constructor(firstName){
    this.firstName = firstName;
  }
  myName(){
    console.log(`hello I am ${this.firstName}`);
  }
}
class Navya extends Female{
  constructor(firstName,hairColor){
    super(firstName);
  
    this.hairColor = hairColor;
  }
  color(){
    console.log(`${this.firstName} my hair color is ${this.hairColor} `);

  }

}
let myFemale = new Female('Navya');
let myNavya = new  Navya('Bhavya','blackColor');
myFemale.myName();
myNavya.myName();
myNavya.color();

// error handling (exceptional handling)  try , catch and throw (custom error )
// these statements are used for handling exceptions
//which are runtime errors that can occur during the execution of a program
//DOM document object model, it like a tree.
//By using HTML DOM Javascript can access and chnage the html elements.
{/* <html>
  <head>
    <title>
    </title>
  </head>
  <body>
  </body>
</html>
 */}
// try{ 
//   let someUndefinedVariable = 5;
//   let result = someUndefinedVariable * 6 ;
//   console.log(result);
// }
// catch(error){
//   console.error('an error occured',error.message);
// }
// finally{
//  console.log('finally black executed');
// }


// try{
//   //let divide = 6;
//   let result =  divide / 5;
//   console.log('Result',result);

// }
// catch(error){
//   console.error('Error',error.message);
// }



// function divide(a, b) {
//   if (a === 0 || b === 0) {
//     throw new Error(`can't divide by zero( ${a} / ${b})`);
//     //thow is the keyword is used to thorw custom error message like above.
//   }
//   return a / b;
// }

// try {
//   let result = divide(10, 1);  // This will throw an exception
//   console.log('Result:', result);  // This line will not be executed
// } catch (error) {
//   console.error('An error occurred:', error.message);  // Catching and handling the exception
// }

// function login(userName,Password)
// {

// if(userName == '' && Password =='')
// {
//   throw new Error("Please enter Username and Password");
// }

//   if(userName == '')
//   {
//     throw new Error("Please enter Username");
//   }

//   if( Password =='')
//   {
//     throw new Error("Please enter password");
//   }

//   if(userName ==''){

// }
// }


// try{
//   let loginData = login('ss','ssd');
//   console.log("login successfully");
// }
// catch (error)
// {
//   console.error("custom message is displaying as " +error.message)
// }
// finally
// {
//   console.log('finally block is executed')
// }
//while you registering you given username as navyar1202navya@gmail.com and password as Navya@123 --it soted in database
// please validate the login credentials
//if username is incorrect the show the error message as invalid username.

//if password is incorrect the show the error message as invalid password.

//if username and password is incorrect the show the error message as invalid username and password.

//username : navyar1202navya
//password :Navya123

// function isUsernameAndPasswordIsEmpty(userName,Password)
// {
  
//   if(userName == '' && Password =='')
// {
//   throw new Error("Please enter Username and  Password");
// }
// }

function login(userName,Password)
{
  console.log(userName + "," + Password)

if(userName == '' && Password =='')
{
  throw new Error("Please enter Username and  Password");
}
//isUsernameAndPasswordIsEmpty(userName,Password);
  if(userName == '')
  {
    throw new Error("Please enter Username");
  }

  if( Password =='')
  {
    throw new Error("Please enter password");
  }
  if (userName !=='navyar1202navya@gmail.com' && Password !=='Navya@123'){
    throw new Error("Invalid  username and password ");
  }
 

  if (userName !== 'navyar1202navya@gmail.com') {
    throw new Error("Invalid Username  ");
  }

  
  if (Password !== 'Navya@123') {
    throw new Error("Invalid Password  ");
  }

  
    
  }

try{ //passing the parameters such as user name and password from UI (login page)
  let loginData = login('navyar1202navya@gmail.com','Navya@123');
  console.log(typeof(loginData));
  console.log("Login successfully" +loginData);
}
catch (error)
{
  console.error(" " +error.message)
}
finally
{
  console.log('finally block is executed')
}

//What's the difference between =, ==, and ===
// var a = 10;// we are assinging 10 values to a variable //number  // asignment operator
// var b ="10"; // we are assinging 10 value to variable b // string
// if(a==b) // both are same because we are checkinging the values only
// {
// console.log("both are same only when we use == ");
// }
// else{
//   console.log("not same");
// }

// if(a===b)
// {
//   console.log("both are same only when we use ===");
// }
// else{
//   console.log("not same");
// }

// scneario 1 : check if both the username and password is empty.
//           a. check if user name is empty.
//           b. check if password is empty

// scenario 2 : check if both the user name and password is valid
//           a. check if username is valid.
//           b. check if password is valid.



    // javaScript modules
 // modules provide a way to organize and structure code by  encapsulating related functionality into separate files.
 //this helps in improving maintanability,reusability and collaboration in large scale projects 



//  let number =[2,7,11,15];
//  let index = number.indexOf(1);
//  console.log(index) ;

//  let a = 2;
//  let b = 7;
//  let sum = a+b;
//  console.log(sum);




// function findTwoNumbers(array, target) { // array= [7,2,5,6],target=9
//   // Create a map to store the complement of each element and its index
//   const complementMap = new Map();

//   for (let i = 0; i < array.length; i++) { //[0=7,1=2,2=5,3=6] // iteration :2 iteration:3
//       const currentNumber = array[i]; //i=0; array[0]=7 //[1]=2
//       const complement = target - currentNumber;// 13-7=6 || 13-2=11 13-5=8 //9-2=7// 13-6=7

//       // Check if the complement is in the map
//       if (complementMap.has(complement)) {
//           // If found, return the indices of the two numbers
//           return [complementMap.get(complement), i];  //[6] index 3//[2], index number 1, //[7] index is 0
//       }

//       // If not found, store the current number and its index in the map
//       complementMap.set(currentNumber, i);
//   }

//   // If no such numbers are found, return an empty array or handle as needed
//   return [];
// }

// Example usage:
// const inputArray = [2, 7, 11, 15];  //13=2+11 index[0,2]
// const targetSum = 18;

// const result = findTwoNumbers(inputArray, targetSum);
// console.log(result);
// let sum =0;
// for(i=0; i<inputArray.length-1;i++)
// {
//   for(j=i+1;j<inputArray.length-1;j++)
//   sum= inputArray[i] + inputArray[j];
//   // if(inputArray[i] + inputArray[i+1] === targetSum)
//   if(sum === targetSum)
//   {
//     console.log("index number of 2 elements is " +i, (i+1));
//   }
// }

// C:\Users\navya\Desktop\Navya\pratice.js

//array = 13,40,50,90,170,128

//target =181 //its sum of 3 elements in the array [128,40,13] =181 output = [0,1,5]

// const result = findThreeElements(inputArray, targetSum);
// console.log(result);

// ------------------------------------

let inputArray = [13,40,50,90,128];  
 //alert(inputArray);
 //alert(inputArray[1]);
 //alert(inputArray[2]);

let targetSum=180;
let summmation =0;
for( i=0; i<inputArray.length-1;i++)
{
  
  summmation= inputArray[i] + inputArray[i+1] + inputArray[i+2];
  //if(inputArray[i] + inputArray[j] + inputArray[k] == targetSum)
  if(summmation == targetSum)
  {
    alert(inputArray[i]+','+ inputArray[i+1]+','+ inputArray[i+2]);
    console.log(summmation);
    console.log("index number of 3 elements is " +i+","+(i+1)+","+(i+2));
    alert("index number of 3 elements is " +i+","+(i+1)+","+(i+2));
  }
  else  { 
    alert('Dont match');
  }


}

  
 function add(a,b){
  return a+b
 }
 const result=add(4,5)
 console.log(result);









  
  

