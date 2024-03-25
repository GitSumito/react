import React from 'react';

class HelloWorld extends React.Component {
  //JSXを返すrenderメソッド
  render(){
    return <h1>Hello, World2!</h1>
  }
}

function App(){
  return(
    <dev>
      <HelloWorld />
    </dev>
  )
}
export default App;