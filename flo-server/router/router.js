const Express = require('express');
const router = Express.Router();
const controller = require('../controller/controller');

router.get('/journeys', controller.getAllJourneys);
router.get('/journeys/:id', controller.getJourneysById);
router.put('/journeys/:id', controller.addNewNote);
router.put('/journeys/delnote/:id', controller.deleteNoteById);
router.put('/journeys/addres/:id', controller.addNewRestaurant);

module.exports = router;
