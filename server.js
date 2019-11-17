const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')

const app = express();
// Connect Database
connectDB();

// Init Middleware
app.use(cors());
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/v1/users', require('./routes/users'));
app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/companies', require('./routes/companies'));
app.use('/api/v1/jobs', require('./routes/jobs'));
app.use('/api/v1/students', require('./routes/students'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is started on port ${PORT}`));