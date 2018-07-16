import React, { Component } from 'react';

import Section from 'components/Section';
import hot_tickets from 'dummy_data.json';

export default class App extends Component {
  state = {
    tickets: hot_tickets
  }

  render() {
    return (
      <div>
        <Section
          headerTitle={'Hot Tickets'}
          subHeaderTitle={'Get tickets to your favourite events'}
          items={this.state.tickets}
        />
      </div>
    );
  }
}
