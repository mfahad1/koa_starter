import Koa from 'koa';
import routesMiddleware from './routes';
import errorMiddleware from './middlewares/error'
import { connect } from './config/database';
import bodyParser from 'koa-bodyparser';

connect(); // connecting database


const app = new Koa();
app.use(bodyParser());
app.use(errorMiddleware());
app.use(routesMiddleware());

app.listen(3000);