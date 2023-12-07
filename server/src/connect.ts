import mongoose from 'mongoose';
import config from 'config';

function connect(){
    const dbUri=config.get('mongoURI') as string;

    const connection=mongoose.connect(dbUri)
                             .then((data)=>{
                                console.log("Database connected with hostname:",data.connection.host)
                             })
                             .catch((err)=>{
                                console.log("DB Error:",err)
                                process.exit(1)
                             })
            
   return connection;
}
export default connect;