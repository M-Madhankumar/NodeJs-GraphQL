module.exports = (sequelize, DataTypes) => {
    var Users = sequelize.define(
        "users", //table name
        {
            userId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            displayName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            emailAddress: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            userRole: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.DATE,
                defaultValue: new Date(),
                allowNull: false,
            },
            updatedAt: {
                type: DataTypes.DATE,
                defaultValue: new Date(),
                allowNull: false,
            }
        },
        {
            timestamps: false,
            freezeTableName: true,
        }
    );
    Users.associate = (models) => {
        Users.belongsTo(models.userroles, { foreignKey: 'userRole', targetKey: 'roleId' })
        Users.hasMany(models.tickets, { foreignKey: 'assignee' });
        Users.hasMany(models.comments, { foreignKey: 'userId' });
    }
    return Users;
}