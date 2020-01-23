const Router = require('koa-router');

const books = new Router();

const handler = (ctx, next) => {
  ctx.body = `${ctx.request.method} ${ctx.request.path}`;
};



