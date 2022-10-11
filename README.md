# solo-node
The `node` portion of SOLO's engineering exam.

My submission uses two dependencies: `express` for the server, and `axios` for fetch requests.

## Getting Started
To start the local API server:

    npm start
## How to Use:
To get a JSON list of all of the **people** in SWapi:

    /people
    /people?sortBy={sortKey}

You can set your `sortKey` query param to `name`, `height`, or `mass`.

To get a JSON list of all the **planets** from SWapi:

    /planets

This express app will give you a list of _all_ the planets available from SWapi, and it will replace all of the URLs in its `residents` property with an array of actual character full names.