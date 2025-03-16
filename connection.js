const mysql = require('mysql');
require('dotenv').config();

var connection = mysql.createConnection({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Check if required environment variables are set
if (!process.env.DB_PORT || !process.env.DB_HOST || !process.env.DB_USERNAME || !process.env.DB_PASSWORD || !process.env.DB_NAME) {
    console.error("⚠️ Missing database environment variables. Check your .env file.");
    process.exit(1); // Stop the app if DB credentials are missing
}

connection.connect((err) => {
    if (!err) {
        console.log("✅ DB connected successfully.");
    } else {
        console.error("❌ DB connection error:", err);
    }
});

module.exports = connection;
