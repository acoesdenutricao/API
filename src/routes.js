const express = require('express');

const UserController = require('./controllers/UserController');
const DocumentCategory = require('./controllers/DocumentCategoryController');
const ExternalLink = require('./controllers/ExternalLinkController');

const routes = express.Router();


// User routes
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.delete('/users/:id', UserController.delete);


// DocumentCategory routes
routes.post('/document_categories', DocumentCategory.store);

// ExternalLink routes
routes.get('/:user_id/user_external_links', ExternalLink.indexFromUsers);
routes.get('/:document_category_id/category_external_links', ExternalLink.indexFromCategory);
routes.post('/:user_id/:document_category_id/external_links', ExternalLink.store);



module.exports = routes;