var config = require('../config');
var $ = require('jquery');
window.$ = $;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App autoreload={config.auto_refresh} minutes={config.refresh_period_in_minutes}/>, document.getElementById('page'));
