const Journey = require('../models/Journey');

const getAllJourneys = async function (req, res) {
  try {
    const getJourney = await Journey.find();
    res.status(200);
    res.send(getJourney);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const getJourneysById = async function (req, res) {
  try {
    const getJourneyById = await Journey.findById(req.params.id);
    res.status(200);
    res.send(getJourneyById);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

module.exports = { getAllJourneys, getJourneysById };
