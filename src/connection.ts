import express from 'express';
import {Request,Response} from 'express';
import * as mongo  from 'mongodb';
import { config } from  './config'; 
let app = express();

let con = async function connect(url : any ) {
    if(url) {
    return mongo.connect(config.db.URL, {useNewUrlParser: true,useUnifiedTopology: true});
    }
    }
    async function disconnect(con : any ) {
     await con.close();
    }

    export {con, disconnect};
    
    

