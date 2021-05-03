const express = require('express');

const UserController = require('./controllers/UserController');
const DocumentCategory = require('./controllers/DocumentCategoryController');
const ExternalLink = require('./controllers/ExternalLinkController');
const Subtitle = require('./controllers/SubtitleController');
const ActionCategory = require('./controllers/ActionCategoryController');
const Action = require('./controllers/ActionController');
const IntervationLevel = require('./controllers/IntervationLevelController');
const ApproachSubject = require('./controllers/ApproachSubjectController');

const routes = express.Router();


// User routes
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.delete('/users/:id', UserController.delete);

// Subtitle routes
routes.post('/subtitles', Subtitle.store);
routes.get('/subtitles', Subtitle.index);
routes.delete('/subtitles/:id', Subtitle.delete);
routes.put('/subtitles/:id', Subtitle.update);

// ActionCategory routes
routes.post('/action-categories', ActionCategory.store);
routes.get('/action-categories', ActionCategory.index);
routes.delete('/action-categories/:id', ActionCategory.delete);
routes.put('/action-categories/:id', ActionCategory.update);

// Intervation Level routes
routes.post('/intervation-levels', IntervationLevel.store);
routes.get('/intervation-levels', IntervationLevel.index);
routes.delete('/intervation-levels/:id', IntervationLevel.delete);
routes.put('/intervation-levels/:id', IntervationLevel.update);

// Approach Subject routes
routes.post('/approach-subjects', ApproachSubject.store);
routes.get('/approach-subjects', ApproachSubject.index);
routes.delete('/approach-subjects/:id', ApproachSubject.delete);
routes.put('/approach-subjects/:id', ApproachSubject.update);

// Action routes
routes.post('/:action_category_id/actions', Action.store);
routes.get('/:action_category_id/actions', Action.index);
routes.delete('/actions/:id', Action.delete);
routes.put('/actions/:id', Action.update);

// DocumentCategory routes
routes.post('/document-categories', DocumentCategory.store);
routes.get('/document-categories', DocumentCategory.index);
routes.delete('/document-categories/:id', DocumentCategory.delete);
routes.put('/document-categories/:id', DocumentCategory.update);

// ExternalLink routes
routes.get('/:user_id/user-external-links', ExternalLink.indexFromUsers);
routes.get('/:document_category_id/category-external-links', ExternalLink.indexFromCategory);
routes.post('/:user_id/:document_category_id/external-links', ExternalLink.store);
routes.delete('/external-links/:id', ExternalLink.delete);
routes.put('/external-links/:id', ExternalLink.update);



module.exports = routes;