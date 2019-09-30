import express from 'express';
import {Request,Response} from 'express';
import * as mongo  from 'mongodb';
let app = express();
let port = 2000;
let url = 'mongodb://localhost/emp';

let con = async function connect(url : any ) {
    if(url) {
    return mongo.connect(url, {useNewUrlParser: true,useUnifiedTopology: true});
    }
    }
    async function disconnect(con : any ) {
     await con.close();
    }

    export {con, disconnect};
    
    

