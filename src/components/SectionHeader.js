import React, { Component } from 'react';

export default class SectionHeader extends Component {
  render() {
    return (
      <h2 className="site-title">
        {this.props.title}
        {this.props.children}
      </h2>
    )
  }
}
