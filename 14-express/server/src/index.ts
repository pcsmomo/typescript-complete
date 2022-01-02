import express, { Request, Response } from 'express';
import chalk from 'chalk';

import { router } from './routes/loginRoutes';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(3000, () => {
  console.log(chalk.italic('Listening on port 3000'));
});
