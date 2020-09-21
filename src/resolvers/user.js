const db = require('../utils/database');

var getUsers = () => {
    return db.users.findAll();
}

var updateUser = (args) => {
    return db.users.update(args, { where: { userId: args.userId } }).then(res => {
        return db.users.findAll().then(result => {
            return result;
        });
    })
}

module.exports = {
    getUsers,
    updateUser
}