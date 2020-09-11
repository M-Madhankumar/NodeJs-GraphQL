const db = require('../utils/database');

module.exports = {
    Query: {
        getAllStatus: async () => db.status.findAll(),
        getStatus: async (obj, args, context, info) => db.status.findByPk(args.statusId),
        getAllRoles: async () => db.userroles.findAll()
    },
    Mutation: {
        createStatus: async (obj, args, context, info) => {
            return db.status.create(args.input).then(res => {
                return db.status.findAll().then(result => {
                    return result;
                });
            });
        },
        updateStatus: async (obj, args, context, info) => {
            return db.status.update(args, { where: { statusId: args.statusId } }).then(res => {
                return db.status.findAll().then(result => {
                    return result;
                });
            });
        },
        deleteStatus: async (obj, args, context, info) => {
            return db.status.destroy({ where: { statusId: args.statusId } }).then(res => {
                return db.status.findAll().then(result => {
                    return result;
                });
            });
        }
    }
}