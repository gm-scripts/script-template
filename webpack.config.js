let config = {
  mode: "production",
  module: {},
};

let client = Object.assign({}, config, {
  name: "client",
  entry: "./src/client/entry.js",
  output: {
    path: __dirname + "/dist/client",
    filename: "main.js",
  },
});
let server = Object.assign({}, config, {
  name: "server",
  entry: "./src/server/entry.js",
  output: {
    path: __dirname + "/dist/server",
    filename: "main.js",
  },
  target: "node",
});

module.exports = client;
