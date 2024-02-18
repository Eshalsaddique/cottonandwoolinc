import mongoose from 'mongoose';
import colors from 'colors'

const connectDB = async ()=>{
   try {
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log(`MongoDB Connected at : ${conn.connection.host}`.yellow);
   }
    catch (error) {
    console.log(`ERROR in mongoDB ${error}`.bgRed.white)
   }
}
export default connectDB