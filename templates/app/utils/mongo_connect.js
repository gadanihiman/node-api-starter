/**
 * Cosmos DB Connection
 * Mongodb
 */

const mongoose = require('mongoose');
/**
 * Set to Node.js native promises
 * Per https://mongoosejs.com/docs/promises.html
 */
mongoose.Promise = global.Promise;

/**
 * Connection to MongoDB Database
 * Gadani <Gadani.Himan@aia.com>
 */
/**
 * Connection to MongoDB Database
 *
 * Gadani <Gadani.Himan@aia.com>
 *
 * @param {String} mongoConnectionStr - mongo connection string
 */
const connect = mongoConnectionStr => {
  mongoose.set('debug', true);
  mongoose.connect(mongoConnectionStr, { useNewUrlParser: true });
};

const db = mongoose.connection;

db.on('error', err => {
  console.error('Restful-API server connection to MongoDB error:', err);
});

db.once('open', () => {
  console.info(`
    Restful-API server has been successfully connected to MongoDB.
  `);
});

db.on('disconnected', () => {
  console.error('Restful-API server disconnected from MongoDB.');
});

db.on('reconnected', () => {
  console.info('Restful-API server reconnected to MongoDB.');
});

export default connect;
