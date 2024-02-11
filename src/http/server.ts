import fastify from 'fastify';
import cookie from '@fastify/cookie';
import { createPoll } from './routes/polls/create';
import { getPoll } from './routes/polls/get';
import { voteOnPoll } from './routes/polls/vote-on-poll';
import ws from '@fastify/websocket';
import { pollResults } from './ws/polls-results';

const app = fastify();

app.register(cookie, {
  secret: 'polls-app-nlw',
  hook: 'onRequest',
});

app.register(ws);

app.register(getPoll);
app.register(createPoll);
app.register(voteOnPoll);

app.register(pollResults);

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!');
});
