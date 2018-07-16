import React, { Component } from 'react';
import SectionItem from 'components/SectionItem';

export default class SectionContents extends Component {
  renderSectionItems() {
    return this.props.items.map(item => (
      <div key={item.id}>
        <SectionItem item={item} />
      </div>
    ));
  }

  render() {
    return(
      <div className="row">
        {this.renderSectionItems()}
      </div>
    );
  }
}
