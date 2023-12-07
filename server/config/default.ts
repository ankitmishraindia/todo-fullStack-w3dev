import * as dotenv from 'dotenv';
dotenv.config();
export default{
    port:5000,
    mongoURI:process.env.MONGO_URI,
    clientUrl:"http://localhost:3000"
}