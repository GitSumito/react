import React from 'react';

class Button extends React.Component {
  handleClick = () => {
    alert('Click!!!');
  }

  render(){
    return <button onClick={this.handleClick}>Clickme</button>
  }
}

export default Button;