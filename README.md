# hn_minimal

A minimal Hacker News client written in React.js

![hn_minimal](http://i.imgur.com/AsWbinn.png)

## Get started

* `npm install`
* `npm start`
* Go to `localhost:3000`

## Auto-refresh

The client will refresh itself every 2 minutes with the latest stories, and sort by score. You can disable auto-refresh or change the update period in `config.js`:

```
config.auto_refresh = true;
config.refresh_period_in_minutes = 2;
```
