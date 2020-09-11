module.exports = (sequelize, DataTypes) => {
    var Priorities = sequelize.define(
        "priorities", //table name
        {
            priorityId: {
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
            freezeTableName: true
        }
    );
    Priorities.associate = (models) => {
        Priorities.hasMany(models.tickets, { foreignKey: 'ticketpriority' });
    }
    return Priorities;
}