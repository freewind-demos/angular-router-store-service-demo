import * as express from 'express';
import * as cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const messages: string[] = [
  'hello'
];

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/messages', (req, res) => {
  res.json(messages);
});

app.post('/messages', (req, res) => {
  const {message} = req.body;
  messages.push(message);
  res.sendStatus(201);
});

app.listen(3000, () => {
  console.log('listen on http://localhost:3000');
});
