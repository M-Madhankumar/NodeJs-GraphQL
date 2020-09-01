const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
var port =  8080;
process.env.SECRET_KEY = 'Project_Management';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.listen(port, () => {
    console.log("Server is running on port: " + port);
})