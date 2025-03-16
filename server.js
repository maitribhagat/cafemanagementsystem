require('dotenv').config();
const http = require('http');
const app = require('./index')
const server1 = http.createServer(app);
app.listen(process.env.PORT)