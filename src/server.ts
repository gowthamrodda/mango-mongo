import express from 'express';
import {Request,Response} from 'express';
import {con} from './connection';
import { config } from  './config'; 
let app = express();

if(con) {

    app.get('/',(req: Request,res: Response) => {
        res.send(`App Listening on port : ${config.app.port}`);
    })
    
    app.listen(config.app.port);

}

