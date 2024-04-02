module.exports = (sequelize, DataType) => {
    const Information = sequelize.define("information", {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false
        }
    });
    return Information;
};