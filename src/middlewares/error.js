import compose from 'koa-compose';

const errorMiddleware = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }
}

export default () => compose([
  errorMiddleware,
]);