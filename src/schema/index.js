const { gql } = require('apollo-server-express');
const db = require('../utils/database');

module.exports = gql`
    scalar Date
    type StatusType {
        statusId: ID!
        slug: String
        name: String
    }

    type Roles {
        roleId: ID!
        slug: String
        name: String
    }

    type User {
        userId: ID!
        displayName: String
        emailAddress: String
        password: String
        userRole: Int
        role: Roles!
        createdAt: Date
        updatedAt: Date
    }

    type Priority {
        priorityId: ID!
        slug: String
        name: String
    }

    input StatusInput {
        slug: String
        name: String
    }

    input RolesInput {
        slug: String
        name: String
    }

    input userInput {
        displayName: String
        emailAddress: String
        password: String
        userRole: Int
    }

    input priorityInput {
        slug: String
        name: String
    }

    type Query {
        getAllStatus: [StatusType!]!
        getStatus(statusId: Int): StatusType!
        getAllRoles: [Roles!]!
        getRole(roleId: Int!): Roles!
        getAllUsers: [User!]!
        getUser(userId: Int): User!
        getPriorities: [Priority!]!
    }

    type Mutation {
        createStatus(input: StatusInput): [StatusType!]!
        deleteStatus(statusId: Int): [StatusType!]!
        updateStatus(statusId: Int!, slug: String, name: String): [StatusType!]!
        createUserRoles(input: RolesInput): [Roles!]!
        updateUserRoles(roleId: Int!, slug: String, name: String): [Roles!]!
        deleteUserRoles(roleId: Int!): [Roles!]!
        createUser(input: userInput): [User!]!
        updateUser(userId:Int!,displayName: String, emailAddress: String,password: String,userRole: Int,updatedAt: Date): [User!]!
        
    }
`
