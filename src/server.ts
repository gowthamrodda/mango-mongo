import express from 'express';
import {Request,Response} from 'express';
import {connection} from './connection';
let app = express();
let port = 2000;

if(connection) {

    app.get('/',(req: Request,res: Response) => {
        res.send(`App Listening on port : ${port}`);
        
    })
    
    app.listen(port);
    
}

