import React from "react";

//importing form component
import Login from './Login'



let isLogedin = false;

//Conditional Functioning
function ConditionalForm(){
  if(isLogedin===true){
    return <h1>Hello</h1>;
  }
  else{
    return<Login />;
  }
}


function App() {
  return (
    <div className="container">
      {ConditionalForm()}     
    </div>
  );
}

export default App;
