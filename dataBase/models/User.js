module.exports = (client, DataTypes) => {
    const User = client.define(
        'User',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                foreignKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: true,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: true
            }

        },
        {
            tableName: 'users',
            timestamps: false
        }
    );

    const Car = require('./Car')(client, DataTypes);
    User.belongsTo(Car, {
        foreignKey: 'id', as: 'car', onDelete: 'CASCADE', onUpdate: 'CASCADE'
    });

    return User;
};
