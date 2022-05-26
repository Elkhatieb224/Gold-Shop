const express = require('express');
const connectDB = require('./config/db');
// const cors = require('cors');
const app = express();
// connect DB
connectDB();

//init middleware
app.use(express.json({ extended: false }));

// app.use(cors()); // Use this after the variable declaration

app.get('/', (req, res) => res.send('API run'));

//define route
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

app.use('/api/profile', require('./routes/api/profile'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
