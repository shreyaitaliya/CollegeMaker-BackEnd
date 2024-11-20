const { DataTypes } = require("sequelize");
const db = require('../config/db');
const sequelize = db.sequelize;
const Subscription = require('../models/SubscriptionModel')(sequelize, DataTypes);
const path = require('path');
const fs = require('fs');

// Function to fetch data and insert it into the database
async function fetchDataAndInsertIntoDB() {
    try {
        const filePath = path.join(__dirname, '../jsonFiles/subscription.json');
        const jsonData = fs.readFileSync(filePath);
        const subscriptionData = JSON.parse(jsonData);

        const subscriptionModel = await Subscription.findOne({});
        if (!subscriptionModel) {
            const insertDataPromises = subscriptionData.map(async (data) => {
                try {
                    return await Subscription.create(data);
                } catch (error) {
                    console.error('Error inserting data:', error);
                    throw error;
                }
            });

            const insertedData = await Promise.all(insertDataPromises);
            if (!insertedData.some(data => !!data)) {
                return {
                    ErrorCode: "REQUEST",
                    ErrorMessage: "Attribute Not inserted in Table",
                };
            }
        }
    } catch (error) {
        console.error('Error processing data:', error.message);
    }
}

fetchDataAndInsertIntoDB();