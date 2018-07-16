import React, { Component } from 'react';

export default class ItemPriceRange extends Component {
  render() {
    return (
      <div className="ticket-price">
        {this.props.range}
      </div>
    );
  }
}
