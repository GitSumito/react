import React from 'react';

function Greeting(props){
  const isLoggedIn = props.isLoggedIn;

  return(
    <dev>
      {isLoggedIn ?
        <h1>Welcome back!</h1> :
        <h1>Please sign up.</h1>}
    </dev>
  )
}

export default function App(){
  return(
    <Greeting isLoggedIn={true}/>
  )
}