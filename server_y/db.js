// connect to database
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.mongo_URL).then(  // connecting to mongodb atlas
    () => {
        console.log('connection Successful to database ');
    }
)
    .catch((err) => {
        console.log('could not connect', err); // for any errors
    })




