const express = require('express');

const token = require('./middlewares/AuthMiddleware');
const UserController = require('./controllers/UserController');
const DocumentCategory = require('./controllers/DocumentCategoryController');
const ExternalLink = require('./controllers/ExternalLinkController');
const Subtitle = require('./controllers/SubtitleController');
const ActionCategory = require('./controllers/ActionCategoryController');
const Action = require('./controllers/ActionController');
const IntervationLevel = require('./controllers/IntervationLevelController');
const ApproachSubject = require('./controllers/ApproachSubjectController');
const Information = require('./controllers/InformationController');
const LoginController = require('./controllers/LoginController');

const routes = express.Router();

//Login routes
routes.post('/auth', LoginController.auth);

// User routes
routes.post('/users', UserController.store);
routes.get('/users', token, UserController.index);
routes.delete('/users/:id', token, UserController.delete);

// Subtitle routes
routes.post('/action/:action_id/subtitles', token, Subtitle.store);
routes.post('/subtitles', token, Subtitle.storeOnlySub);
routes.get('/subtitles', Subtitle.index);
routes.delete('/subtitles/:id', token, Subtitle.delete);
routes.put('/subtitles/:id', token, Subtitle.update);


// ActionCategory routes
routes.post('/action-categories', token, ActionCategory.store);
routes.get('/action-categories', ActionCategory.index);
routes.delete('/action-categories/:id', token, ActionCategory.delete);
routes.put('/action-categories/:id', token, ActionCategory.update);

// Intervation Level routes
routes.post('/intervation-levels', token, IntervationLevel.store);
routes.get('/intervation-levels', IntervationLevel.index);
routes.get('/intervation-levels/:id', IntervationLevel.get);
routes.delete('/intervation-levels/:id', token, IntervationLevel.delete);
routes.put('/intervation-levels/:id', token, IntervationLevel.update);

// Approach Subject routes
routes.post('/approach-subjects', token, ApproachSubject.store);
routes.get('/approach-subjects', ApproachSubject.index);
routes.get('/approach-subjects/:id', ApproachSubject.get);
routes.delete('/approach-subjects/:id', token, ApproachSubject.delete);
routes.put('/approach-subjects/:id', token, ApproachSubject.update);

//informations routes
routes.get('/informations', Information.index);
routes.get('/information/:approach_subject_id/:intervation_level_id/categories', Information.indexCategoryInformation);
routes.get('/information/action/:category_information_id', Information.indexAction);
routes.post('/informations', token, Information.store);
routes.delete('/information/categories/:id', token, Information.delete);

// Action routes
routes.post('/actions', token, Action.store);
routes.get('/actions', Action.index);
routes.get('/actions/:id',Action.get)
routes.delete('/actions/:id', token, Action.delete);
routes.put('/actions/:id', token, Action.update);
routes.delete('/action/:action_id/:subtitle_id', Action.deleteSubtitle);

// DocumentCategory routes
routes.post('/document-categories', token, DocumentCategory.store);
routes.get('/document-categories', DocumentCategory.index);
routes.delete('/document-categories/:id', token, DocumentCategory.delete);
routes.put('/document-categories/:id', token, DocumentCategory.update);

// ExternalLink routes
routes.get('/:user_id/user-external-links', ExternalLink.indexFromUsers);
routes.get('/:document_category_id/category-external-links', ExternalLink.indexFromCategory);
routes.post('/:user_id/:document_category_id/external-links', token, ExternalLink.store);
routes.delete('/external-links/:id', token, ExternalLink.delete);
routes.put('/external-links/:id', token, ExternalLink.update);



module.exports = routes;