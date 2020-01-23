const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const api = require('./api');
// 미들웨어의 배열
// next()는 프로미스

// app.use(async (ctx, next) => {
//   console.log(1);
//   const started = new Date();
//   next().then(() => {
//     console.log(new Date() - started + 'ms');
//   });
// });

// app.use((ctx, next) => {
//   console.log(2);
//   next();
// });


// app.use((ctx, next) => {
//   ctx.body = 'Hello Koa';
// });
router.use('/api', api.routes());


router.get('/', (ctx, next) => {
  ctx.body = '흠';
});

router.get('/about/:name', (ctx, next) => {
  const { name } = ctx.params;
  ctx.body = name + '의 소개';
});

router.get('/post', (ctx, next) => {
  const { id } = ctx.request.query;
  if(id) {
    ctx.body = '포스트 #' + id;
  } else {
    ctx.body = '포스트 아이디가 없습니다.';
  }
});

// app.use(router.routes());
// app.use(router.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('heurm server is listening to port 4000');
});

