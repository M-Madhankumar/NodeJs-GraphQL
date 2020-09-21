const db = require('../utils/database');

var updateRole = (args) => {
    return db.userroles.update(args, { where: { roleId: args.roleId } }).then(res => {
        return db.userroles.findAll().then(result => {
            return result;
        });
    });
}

var deleteRole = (args) => {
    return db.userroles.destroy({ where: { roleId: args.roleId } }).then(res => {
        return db.userroles.findAll().then(result => {
            return result;
        });
    });
}

module.exports = {
    updateRole,
    deleteRole
}