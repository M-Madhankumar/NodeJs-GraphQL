module.exports = (sequelize, DataTypes) => {
    var Roles = sequelize.define(
        "userroles",
        {
            roleId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            slug: {
                type: DataTypes.STRING,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            timestamps: false,
            freezeTableName: true,
        }
    );
    Roles.associate = (models) => {
        Roles.hasMany(models.users, { foreignKey: 'userRole' })
    }
    return Roles;
}