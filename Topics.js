// let Person={  // person is a object
//     name:'navya', // this is a properties 
//     age:21
//   };
//   console.log(Person.name);

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


let age =50;
    if (age >=30 && age<=80){
       console.log( "invalid");
    } 




    //     //  but the spread syntax expands itarables into individual elements 
//     //example  rest oparator
 function myBio(firstName,lastName,...otherInfo){
 return ` ${firstName} ${lastName} `+ otherInfo ;
 }
 myBio('srinivasa','tk',21,'kolar',"engineering")
 console.log(myBio('srinivasa','tk',21,'kolar',"engineering"));



 const myName =["tk","srini","babu","navya"];
 const otherNames =["venky","ravi","rani",...myName,"bhavya"];
 console.log(otherNames);


 let num = [ 10,20,30,40,50];
let evenNumber = num.filter(num =>
  {
    return num % 2 ===0
  });
  console.log(evenNumber);



 
