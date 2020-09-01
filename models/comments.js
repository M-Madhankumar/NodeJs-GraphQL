module.exports = (sequelize, DataTypes) => {
    var Comments = sequelize.define(
        "comments", //table name
        {
            commentId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            comment: {
                type: DataTypes.STRING,
                allowNull: false
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            ticketId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            createdAt: {
                type: DataTypes.DATE
            },
            updatedAt: {
                type: DataTypes.DATE
            }
        },
        {
            timestamps: false,
            freezeTableName: true
        }
    );
    Comments.associate = (models) => {
        Comments.belongsTo(models.tickets, { foreignKey: 'ticketId', targetKey: 'ticketId' });
        Comments.belongsTo(models.users, { foreignKey: 'userId', targetKey: 'userId' });
    }
    return Comments;
}