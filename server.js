// express.js is a web application framework for Node.js, released as free and open source sof
const express = require('express');
// initialize express into variable app
const app = express();

// specify get request , and response to the request
app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the Contact Keeper API...' })
);

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contact'));

const PORT = process.env.PORT || 5000;
// app takes a port to listen
app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
