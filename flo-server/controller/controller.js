const Journey = require('../models/Journey');

const getAllJourneys = async function (req, res) {
  try {
    const journeys = await Journey.find({}, '_id coordinates title');
    res.status(200);
    res.send(journeys);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const getJourneysById = async function (req, res) {
  try {
    const journeyData = await Journey.findById(req.params.id);
    res.status(200);
    res.send(journeyData);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send('Something went wrong');
  }
};

module.exports = { getAllJourneys, getJourneysById };
