const routes = require('express').Router();

const users = require('./controllers/users');
const accounts = require('./controllers/accounts');
const categories = require('./controllers/categories');
const transactions = require('./controllers/transactions');

routes.post('/users/signup', users.create);
routes.post('/users/login', users.login);
routes.put('/users/update/:id', users.update);

routes.post('/accounts/create', accounts.create);
routes.get('/accounts', accounts.get);
routes.get('/accounts/:id', accounts.getOne);

routes.post('/categories', categories.create);
routes.get('/categories', categories.get);

routes.get('/transactions', transactions.get);

module.exports = routes;
