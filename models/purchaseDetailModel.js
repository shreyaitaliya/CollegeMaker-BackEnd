const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

module.exports = (sequelize, DataTypes) => {
    const purchase = sequelize.define('purchase', {
        purchaseID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        SubscriptionID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        planName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        startDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        endDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: 'active',
        },
        IsDeleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    }, {
        tableName: 'purchase',
        timestamps: false,
    });
    return purchase;
}