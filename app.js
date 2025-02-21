const morgan = require('morgan');
const express = require("express");
const app = express();
const tourRouter = require('./routes/tourRouter');

// Middleware to parse JSON
app.use(express.json());

app.use(morgan('tiny'));

app.use('api/tours', tourRouter);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
