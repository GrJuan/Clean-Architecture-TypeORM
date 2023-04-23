import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from 'cors';

const routes = require('./routes');

const PORT = process.env.PORT || 3008

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());
    app.use(cors())

    // register express routes from defined application routes
    app.use('/', routes);

    app.listen(PORT, () => console.log(`SERVER APP RUNNING ON PORT ${PORT}`));

}).catch(error => console.log(error));
