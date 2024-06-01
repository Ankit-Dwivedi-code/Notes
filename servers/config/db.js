const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const connectDB = async () =>{
    try {
      console.log(`MongoDB URI: ${process.env.MONGODB_URI}`);
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Database connected ${conn.connection.host}`

        );
        
    } catch (error) {
      console.log(error.message);  
    }
}

module.exports = connectDB