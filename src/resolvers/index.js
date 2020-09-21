const db = require('../utils/database');
const Common = require('./Common');
const Status = require('./status');
const userRoles = require('./userRoles');
const User = require('./user');

module.exports = {
    Query: {
        getAllStatus: async () => Common.getAllData(db.status),
        getStatus: async (obj, args, context, info) => Common.getUniqueData(db.status, args.statusId),
        getAllRoles: async () => Common.getAllData(db.userroles),
        getRole: async (obj, args, context, info) => Common.getUniqueData(db.userroles, args.roleId),
        getAllUsers: async () => Common.getAllData(db.users),
        getUser: async (obj, args, context, info) => Common.getUniqueData(db.users, args.userId),
        getPriorities: async () => Common.getAllData(db.priorities),
    },
    Mutation: {
        //Status
        createStatus: async (obj, args, context, info) => Common.createData(db.status, args.input),
        updateStatus: async (obj, args, context, info) => Status.updateStatus(args),
        deleteStatus: async (obj, args, context, info) => Status.deleteStatus(args),

        //User Roles
        createUserRoles: async (obj, args, context, info) => Common.createData(db.userroles, args.input),
        updateUserRoles: async (obj, args, context, info) => userRoles.updateRole(args),
        deleteUserRoles: async (obj, args, context, info) => userRoles.deleteRole(args),

        //Users
        createUser: async (obj, args, context, info) => Common.createData(db.users, args.input),
        updateUser: async (obj, args, context, info) => User.updateUser(args)
    },
    User: {
        role: async (obj, args, context, info) => db.userroles.findByPk(obj.userRole)
    }
}