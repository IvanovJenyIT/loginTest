
import express, {Request, Response}  from'express';
const app = express();

app.get('/', (req: Request, res: Response) => {
  let helloMess = 'Hello Worlds6!';
  res.send(helloMess);
});

app.listen(4000, () => {
  console.log('Server listening on port 4rr000');
});