import React, { Component } from 'react';


 class Rank extends Component {
  render() {
    const { name }=this.props;
    const { counter }=this.props;
    return (
      <div>
          <div className='white f3'>{`${name} the num of Face Is?`}</div>
          <div className='white f1'>{counter}</div>

        
      </div>
    )
  }
}
export default Rank;
