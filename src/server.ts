import express, { Express } from 'express';
import { Request, Response } from 'express';
import * as http from 'http';
import { Http2Server } from 'http2';

class Server {
  private app: Express;
  private server: any;
  private port: number;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    this.server = http.createServer(this.app);
  }
}
