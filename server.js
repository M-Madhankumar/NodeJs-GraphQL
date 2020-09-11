// import '@babel/polyfill';
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
var port = 8080;
process.env.SECRET_KEY = 'Project_Management';

const { gql } = require('apollo-server-express');
const typeDefs = require('./src/schema/index.js');
const resolvers = require('./src/resolvers/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.applyMiddleware({ app });
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => {
    console.log("🚀 Server is running on port: " + port);
})