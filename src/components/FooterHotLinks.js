import React, { Component } from 'react';

import hot_tickets from 'dummy_data.json';

class FooterHotLinks extends Component {
  state = {
    tickets: hot_tickets
  }

  renderHotLinks() {
    return this.state.tickets.map(ticket => (
      <li key={ticket.id}>
        <a href="">{ticket.name}</a>
      </li>
    ));
  }

  render() {
    return (
      <div className="col-sm-3">
        <h6>Popular Events</h6>
        <ul>
          {this.renderHotLinks()}
        </ul>
      </div>
    );
  }
}

export default FooterHotLinks;
