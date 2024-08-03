const auth = require('json-server-auth');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const rules = auth.rewriter({
    'users': 600,
    'boards': 600,
    'tasks': 600
});

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(rules);
server.use(auth);
server.use(router);

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`JSON Server is running on http://localhost:${PORT}`);
});
