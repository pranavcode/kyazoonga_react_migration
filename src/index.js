import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';
import FooterHotLinks from 'components/FooterHotLinks';

ReactDOM.render(<App />, document.querySelector('#hot_tickets'));
ReactDOM.render(<FooterHotLinks />, document.querySelector('#footer_hot_links'));
