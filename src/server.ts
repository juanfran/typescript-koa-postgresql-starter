import cors from '@koa/cors';
import Router from '@koa/router';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';

const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = {
    text: 'Hello World',
  };
});

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(cors())
  .use(bodyParser())
  .use(logger())
  .listen(3000);
