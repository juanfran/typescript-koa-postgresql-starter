import Koa from 'koa';
import Router from '@koa/router';
import cors from '@koa/cors';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';

const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = {
    text: 'Hello World'
  };
});

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(cors())
  .use(bodyParser())
  .use(logger())
  .listen(3000);
