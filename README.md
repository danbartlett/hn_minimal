# hn_minimal

A minimal Hacker News client written in React.js

![hn_minimal](http://i.imgur.com/NwshJSe.png)

## Installation

* `npm install`
* `npm start`

## Auto-refresh

The client will refresh itself every 2 minutes with the latest stories, and sort by score. You can change this in  `App.js` - look for `setInterval(this.loadItems, 120000);`
