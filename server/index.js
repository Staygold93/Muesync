require("dotenv").config();
const express = require('express');
const app = express();



connection();
app.use(cors());
app.use(express.json());



const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}`))

