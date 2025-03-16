const express = require('express');
var cors = require('cors');
require('dotenv').config(); // Ensure environment variables are loaded
const connection = require('./connection');
const userRoute = require('./routes/user');
const categoryRoute = require('./routes/category');
const productRoute = require('./routes/product');
const billRoute = require('./routes/bill');
const dashboard = require('./routes/dashboard');
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Server is running....' });
});

// Define routes before starting the server
app.use('/user', userRoute);
app.use('/category', categoryRoute);
app.use('/product', productRoute);
app.use('/bill', billRoute); // Fixed the mistake
app.use('/dashboard', dashboard);

const PORT = process.env.PORT || 5000; // Fallback port in case env variable is missing

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});

module.exports = app;
