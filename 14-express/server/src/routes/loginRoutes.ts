import { Router, Request, Response } from 'express';

const router = Router();

router.get('/login', (req: Request, res: Response): void => {
  res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="em" />
      </div>
      <div>
        <label>Password</label>
        <input name="pa" type="password" />
      </div>
      <button>Submit</button>
    </form>
  `);
});

router.post('/login', (req: Request, res: Response): void => {
  const { email, password } = req.body;

  res.send(email.toUpperCase());
});

export { router };
