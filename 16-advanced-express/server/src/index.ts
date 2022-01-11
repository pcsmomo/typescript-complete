import express from 'express';
import chalk from 'chalk';
import cookieSession from 'cookie-session';

import { AppRouter } from './AppRouter';
import './controllers/RootController';
import './controllers/LoginController';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ['laskdjf'],
  })
);
// app.use(AppRouter.getInstance());
app.use(AppRouter.instance);

app.listen(3000, () => {
  console.log(chalk.italic('Listening on port 3000'));
});
