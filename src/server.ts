import cookieParser from 'cookie-parser';
import express, { Express } from 'express';
import * as http from 'http';
import createError from 'http-errors';

class Server {
  private app: Express;
  private server: any;

  constructor() {
    this.app = express();
    this.app.get('/', (req, res, next) => {
      res.send({
        msg: 'Hello World',
      });
    });
  }

  public start(port: number = 3000) {

    this.app.set('port', port);
    this.app.listen(port, () => console.log('app listening on', port));

  }
}

new Server().start(4000);
