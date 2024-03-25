import React from 'react';

function Greeting(props){
  const isLoggedIn = props.isLoggedIn;

  if(isLoggedIn){
    return <h1>aaaa</h1>;
  }else{
    return <h1>bbbb</h1>;
  }
}

export default function GreetingApp(){
  return <Greeting isLoggedIn={true} />;
}