'use strict';
const mongoose = require('mongoose');
const {db: {port, host, name}} = require('../configs/config.mongodb');
const connectString =`mongodb://${host}:${port}/${name}`;

console.log(`Connecting to MongoDB at `, connectString);
class Database {
    constructor() {
        this.connect();
    }
    // Connect to MongoDB
    connect(type = 'mongodb') {
        if (1 === 1) {
            mongoose.set('debug', true);
            mongoose.set('debug', {color: true});
        }

        mongoose.connect(connectString, {
            maxPoolSize: 20
        }).then( _ => console.log('Connected to MongoDB'))
            .catch(err => console.error('Could not connect to MongoDB', err));
    }

    static getInstance() {
        if(!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

const instanceMongoDB = Database.getInstance();
module.exports = instanceMongoDB;
