import React, { Component } from 'react';

export default class ItemImage extends Component {
  render() {
    return(
      <div className="ticket-img">
        <img src={this.props.img} alt="" />
        <span>{this.props.children}</span>
      </div>
    )
  }
}
