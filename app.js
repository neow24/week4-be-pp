const express = require("express");
const app = express();
const router = require('./tourRouter');

// Middleware to parse JSON
app.use(express.json());

app.use(router);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
