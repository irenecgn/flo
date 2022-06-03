const Express = require('express');
const router = Express.Router();
const controller = require('../controller/controller');

router.get('/journeys', controller.getAllJourneys);
router.get('/journeys/:id', controller.getJourneysById);

module.exports = router;
