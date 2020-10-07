const express = require('express');
const cors = require('cors');

const app = express();
require('dotenv').config();

// = Change as Needed for HTTP Requests
app.use(cores({
    origin: ['http://localhost:3000'],
    methods: "GET, PUT, POST, DELETE",
    optionsSuccessStatus: 200
}));

// ? -- -- -- -- MiddleWare -- -- -- -- 
app.use(express.urlencoded({extended: false}));

app.use(express.json());

// Logger
app.use((req, res, next) => {
    console.log(`${req.meth} ${req.url} ${req.Date().toLocaleTimeString()}`);
})

// ? -- -- -- -- Base Route URL's -- -- -- --
app.use('/api/', routes.base);
// http://localhost:PORT/api/

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));


