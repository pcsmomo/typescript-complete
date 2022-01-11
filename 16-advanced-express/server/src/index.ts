import express, { Request, Response } from 'express';
import chalk from 'chalk';
import cookieSession from 'cookie-session';

import { router } from './routes/loginRoutes';
import { router as controllerRouter } from './controllers/decorators/controller';
import './controllers/LoginController';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ['laskdjf'],
  })
);
app.use(router);
app.use(controllerRouter);

app.listen(3000, () => {
  console.log(chalk.italic('Listening on port 3000'));
});
