import React from 'react';

function Greeting(props){
  return <h1> hello, {props.name} </h1>;
}

function App(){
  return (
    <dev>
      <Greeting name="hogehoge"/>
      <Greeting name="fugafuga"/>
    </dev>
  )
}

export default App();