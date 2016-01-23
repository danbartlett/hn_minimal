var $ = require('jquery');
window.jQuery = $;
window.$ = $;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App autoreload='false'/>, document.getElementById('page'));
