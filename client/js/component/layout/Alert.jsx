import React from 'react';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    user: store.user
  }
})

export default class Alert extends React.Component {
  constructor(){
    super();
    this.state = {
      display: 'block',
    }
  }
  render() {
    if(this.props.user.status.error){
      return (
        <div className="alert alert-warning" role="alert" display={this.state.display}>
          <span className="text-black">{this.props.user.status.error.message}</span>
        </div>
      )
    }
    else {
      return null;  
    }
  }
}