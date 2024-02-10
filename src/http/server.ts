import fastify from 'fastify';
import { createPoll } from './routes/polls/create';
import { getPoll } from './routes/polls/get';

const app = fastify();

app.register(getPoll);
app.register(createPoll);

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!');
});
