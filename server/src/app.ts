import express from 'express';
import config from 'config';
import connect from './db/connect';
import routes from './routes';
import cors from 'cors';

const port=config.get('port') as number;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({
       origin:config.get('clientUrl') as string
}))

//insert router
app.use('/todo',routes)

//server running
app.listen(port,async()=>{
       //db connection
       await connect()
       console.log("Server is running at port:",port)
       
})