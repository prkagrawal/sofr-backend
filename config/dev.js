require('dotenv').config();

module.exports = {
  config: {
    mongo: {
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
      connectionString: process.env.MONGO_URI,
    },
  },
};