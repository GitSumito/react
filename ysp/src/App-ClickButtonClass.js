import React from 'react';

class Button extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    alert('Clicked!?!?');
  }

  render(){
    return <button onClick={this.handleClick}>Click</button>
  }
}

export default Button;