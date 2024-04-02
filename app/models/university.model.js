module.exports = (sequelize, DataType) => {
    const Universities = sequelize.define("university", {
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
    return Company;
};