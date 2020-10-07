const mongoose = require('mongoose');

const connString = process.env.MONGODB_URI || "mongodb://localhost:27017/blank";
const configOpt = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};

mongoose.connect(connString, configOpt)
    .then(() => console.log('MongoDB Connected Successfully'))
    .then(err => console.log(`MongoDB connection error: ${err}`));

module.exports = {
    /* Models Require Here,
     * Example :
     * User: require('./User'),
     * */       
};
