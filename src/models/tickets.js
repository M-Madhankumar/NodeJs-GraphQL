module.exports = (sequelize, DataTypes) => {
    var Tickets = sequelize.define(
        "tickets", //table name
        {
            ticketId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            subject: {
                type: DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false
            },
            startDate: {
                type: DataTypes.DATE
            },
            endDate: {
                type: DataTypes.DATE
            },
            ticketpriority: {
                type: DataTypes.INTEGER
            },
            ticketStatus: {
                type: DataTypes.INTEGER
            },
            assignee: {
                type: DataTypes.INTEGER
            },
            createdAt: {
                type: DataTypes.STRING
            },
            updatedAt: {
                type: DataTypes.STRING
            }
        },
        {
            timestamps: false,
            freezeTableName: true,
        }
    );
    Tickets.associate = (models) => {
        Tickets.belongsTo(models.status, { foreignKey: 'ticketStatus', targetKey: 'statusId' });
        Tickets.belongsTo(models.priorities, { foreignKey: 'ticketpriority', targetKey: 'priorityId' });
        Tickets.belongsTo(models.users, { foreignKey: 'assignee', targetKey: 'userId' });
        Tickets.hasMany(models.comments, { foreignKey: 'ticketId' });
    }
    return Tickets;
}