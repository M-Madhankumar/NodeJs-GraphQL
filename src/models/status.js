module.exports = (sequelize, DataTypes) => {
    var Status = sequelize.define(
        "status", //table name
        {
            statusId: {
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
    Status.associate = (models) => {
        Status.hasMany(models.tickets, { foreignKey: 'ticketStatus' });
    }
    return Status;
}