# solo-node
The `Node` portion of SOLO's engineering exam.

My submission uses two dependencies: `Express.js` for the server, and `Axios` for fetch requests.

## Task
[Star Wars API](https://swapi.dev/) (*or, SWapi*) is a small, but public and free-to-use API for developers. You send a request to one of its endpoints and it returns information about characters and locations in the Star Wars universe. It can only return 10 items at a time, but luckily, has pagination information.

Create a Node.js API server using `Express.js` that exposes two endpoints: `/people` and `/planets`. When a user hits each endpoint, it should return a single payload containing **every** item that is available in the Star Wars API database, not just 10 at a time.

Then, do both of the following:

 1. `/people` should have an optional query param called **sortBy** that can have only 3 values: `name`, `height`, and `mass`. For example, `/people?sortBy=name` should return a payload of people sorted by name.
 2. `/planets` does not need to be sorted. However, by default SWapi returns `planets.residents` as an array of URLs. Our `/planets` endpoint should return a list of full names for its `residents` value instead of URLs.

## Getting Started
To start the local API server:

    npm start
## How to Use:
To get a JSON list of all of the **people** in SWapi:

    {apiURL}/people
    {apiURL}/people?sortBy={sortKey}

You can set your `sortKey` query param to `name`, `height`, or `mass`.

To get a JSON list of all the **planets** from SWapi:

    {apiURL}/planets

This express app will give you a list of _all_ the planets available from SWapi, and it will replace all of the URLs in its `residents` property with an array of actual character full names.