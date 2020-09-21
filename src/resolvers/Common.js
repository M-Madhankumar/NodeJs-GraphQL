
//To Get all the data for Status, UserRoles
var getAllData = (dbName) => {
    return dbName.findAll();
};

//To Get the Data by ID for Status and User Roles
var getUniqueData = (dbName, id) => {
    return dbName.findByPk(id);
};

//To Insert Data for Status and UserRoles
var createData = (dbName, data) => {
    return dbName.create(data).then(res => {
        return dbName.findAll().then(result => {
            return result;
        });
    });
};


module.exports = {
    getAllData,
    getUniqueData,
    createData
};