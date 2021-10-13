import * as mongoose from 'mongoose';
require('dotenv').config();
export class DatabaseConfig {
  static async connect() {
    console.log(`Connection to Database uri: ${process.env.MONGO_URI}`);
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.MONGO_DATABASE,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database successfully connected!`);
  }
}
