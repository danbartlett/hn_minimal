# hn_minimal

A minimal Hacker News client written in React.js

![hn_minimal](http://i.imgur.com/NwshJSe.png)

## Installation

* `npm install`
* `npm start`
 

## Auto-refresh

If you want the client to auto-refresh itself, change `autoreload` to true in `src/index.js`

The refresh time is set in `App.js` - look for `setInterval(this.loadItems, 4000);`
