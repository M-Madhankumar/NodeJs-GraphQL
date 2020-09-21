const db = require('../utils/database');

var updateStatus = (args) => {
    return db.status.update(args, { where: { statusId: args.statusId } }).then(res => {
        return db.status.findAll().then(result => {
            return result;
        });
    });
};

var deleteStatus = (args) => {
    return db.status.destroy({ where: { statusId: args.statusId } }).then(res => {
        return db.status.findAll().then(result => {
            return result;
        });
    });
}

module.exports = {
    updateStatus,
    deleteStatus
}