module.exports = (client, DataTypes) => {
    const Car = client.define(
        'Car',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true
            },
            car_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            user_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                foreignKey: true
            },
        },
        {
            tableName: 'cars',
            timestamps: false
        }
    );

    return Car;
};
