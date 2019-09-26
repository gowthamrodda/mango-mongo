import express from 'express';
import {Request,Response} from 'express';
import * as mongo  from 'mongodb';
let app = express();
let port = 2000;
let url = 'mongodb://localhost/emp';

let connection = mongo.connect(url,{useNewUrlParser: true,useUnifiedTopology: true}).then(() => { 
    console.log('connected to MongoDB');
},
).catch(err => {
    console.log("MongoDB connection error." + err);
});

export {connection}

