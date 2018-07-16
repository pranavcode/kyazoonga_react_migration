import React, { Component } from 'react';

import ItemFooterCalendar from 'components/ItemFooterCalendar';
import ItemFooterSocial from 'components/ItemFooterSocial';

export default class ItemFooter extends Component {
  render() {
    return (
      <div className="social clearfix">
        <ItemFooterCalendar />
        <ItemFooterSocial />
      </div>
    );
  }
}
