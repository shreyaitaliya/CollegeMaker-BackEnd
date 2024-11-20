const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

module.exports = (sequelize, DataTypes) => {
    const Subscription = sequelize.define('Subscription', {
        SubscriptionID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
        createdOn: {   
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        LastModifiedOn: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        IsActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        IsDeleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    }, {
        tableName: 'subscriptions',
        timestamps: false,
    });
    return Subscription;
}