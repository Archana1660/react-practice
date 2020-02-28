import React from 'react';

const Template = () => {
  var studentDetails = {
    firstName: 'Josh',
    lastName:'Bond',
    studentID: 42,
    location: 'Bokajan',
    age: 26,
    subjects:["Maths", "English", "Science", "React"],

  };

  function studentName(fname,lname){
    if(lname){
      return fname+" "+lname;
    }
    //else{
      //return undefined; // as return will automatically return undefined. therefore else block is not needed 
    //}
  }

  function studentLocation(location){
    if(location){
    return <p>Home town: {location}</p>;
    }
    //else{
      //return undefined; // as return will automatically return undefined. When undefined is under JSX expression, neither the output nor the in console shows anything
    //}
  }

  return(
    <div>
     <p>Student: {studentName('Josh', 'Bond')}</p>
     {studentLocation('Bokajan')}{/*JSX experssion*/}
     {studentDetails.studentID > 30 && <p>studentID is: {studentDetails.studentID}</p>}
     <p>{studentDetails.age ? studentDetails.age: 'check the age'}</p>{/*use ternary operator */}
     <ol> Subjects: 
        {studentDetails.subjects.map(x=><li>{x}</li>)}
     </ol>
    </div>
  )
};

export {Template};