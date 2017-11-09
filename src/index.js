import Koa from 'koa';
import routesMiddleware from './routes';
import { connect } from './config/database';
import bodyParser from 'koa-bodyparser';

connect(); // connecting database

const app = new Koa();
app.use(bodyParser());
app.use(routesMiddleware());
app.listen(3000);