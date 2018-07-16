import React, { Component } from 'react';

export default class SectionSubheader extends Component {
  render() {
    return (
      <small>
        {this.props.title}
      </small>
    )
  }
}
