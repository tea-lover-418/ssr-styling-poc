# SSR styling POC

This is a proof of concept demonstrating loading custom styles into a server side rendered NextJs application.

### Api

The styling is retrieved from an API, here in `styling-endpoint-server.js`. It returns a json object from endpoint `/` when called.

### PWA

The pwa calls the API endpoint on startup. It then sets the styling in a global singleton. When there is no response form the API, it will return to default styling.
There is an endpoint on this front-end `api/reload-styles` which reloads the styling after startup so you don't need to restart to reflect changes.

### Running

First run `npm run start:api`. Open a new terminal window and run `npm run dev`. You should see the styling reflected in the PWA.
