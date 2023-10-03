// const express = require('express');
// const dotenv = require('dotenv');
// const bodyParser = require("body-parser");
// const https = require ("https");
// const routes = require('./routes');

// dotenv.config();

// const app = express();

// // Middleware Configurations
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.json());
// app.use(express.static(__dirname + '/public'));

// // Serve your index.html file on the root endpoint
// app.get ("/", function(req, res) {
//     res.sendFile(__dirname + "/index.html");
// });

// // Use the routes defined in routes.js
// app.use('/', routes);

// // Starting the server
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
