import express from 'express';
import {Request,Response} from 'express';
let app = express();
let port = 2000;

app.get('/',(req: Request,res: Response) => {
    res.send(`App Listening on port : ${port}`);
    
})

app.listen(port);