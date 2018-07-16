import React, { Component } from 'react';

import SectionHeader from 'components/SectionHeader';
import SectionSubheader from 'components/SectionSubheader';
import SectionContents from 'components/SectionContents';
import SectionDiscoverMore from 'components/SectionDiscoverMore';

export default class Section extends Component {
  render() {
    return (
      <section className="hot-ticket-sec ticket-boxes">
        <div className="container">
          <SectionHeader title={this.props.headerTitle}>
            <SectionSubheader title={this.props.subHeaderTitle} />
          </SectionHeader>
          <SectionContents items={this.props.items} />
          <SectionDiscoverMore />
        </div>
      </section>
    );
  }
}
