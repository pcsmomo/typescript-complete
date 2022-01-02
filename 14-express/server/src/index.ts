import express, { Request, Response } from 'express';
import chalk from 'chalk';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send(`
    <div>
      <h1>Hi there!</h1>  
    </div>
  `);
});

app.listen(3000, () => {
  console.log(chalk.italic('Listening on port 3000'));
});
