const { gql } = require('apollo-server-express');
const db = require('../utils/database');

module.exports = gql`
    type statusType {
        statusId: ID!
        slug: String
        name: String
    }

    type roles {
        roleId: ID!
        slug: String
        name: String
    }

    input statusInput {
        slug: String
        name: String
    }

    input rolesInput {
        slug: String
        name: String
    }

    type Query {
        getAllStatus: [statusType!]!
        getStatus(statusId: Int): statusType!
        getAllRoles: [roles!]!
        getRole(roleId: Int!): roles!
    }

    type Mutation {
        createStatus(input: statusInput): [statusType!]!
        deleteStatus(statusId: Int): [statusType!]!
        updateStatus(statusId: Int!, slug: String, name: String): [statusType!]!
        createUserRoles(input: rolesInput): [roles!]!
        updateUserRoles(roleId: Int!, slug: String, name: String): [roles!]!
        deleteUserRoles(roleId: Int!): [roles!]!
    }
`
