// connecting to the MongoDB application through a connection string

// import all relevant packages and get URI we defined
const mongoose = require('mongoose');
const config = require('config');
const db_con_str = config.get('mongoURI');

//Connect to MongoDB database using async function
const F_connectDB = async () => {
    
    try {
        //await for the promise to be fulfilled
        await mongoose.connect(
            db_con_str,
            {
                useNewURLParser: true
            }
        );
        console.log('MongoDB is connected...');
    
    // handle exception where it fails
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

// export the function we created for external use.
module.exports = F_connectDB;