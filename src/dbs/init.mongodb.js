'use strict'
const mongoose = require('mongoose');
const connectString = `mongodb://localhost:27017/shop`;
const { countConnect } = require('../helpers/check.connect.js');

console.log(`connectString: ${connectString}`);
class Database {
    constructor() {
        this.connect()
    }
    // Connect to MongoDB
    connect() {
        // Dev
        if (1 === 1) {
            mongoose.set('debug', true)
            mongoose.set('debug', {colors: true})
        }

        mongoose.connect(connectString, {
            maxPoolSize: 30
        }).then(_ => console.log('MongoDB connected...', countConnect()))
        .catch(err => console.log('MongoDB connection error', err))
    }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }
        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb