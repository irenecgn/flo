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
    console.log('looking');
    console.log(req.params);
    const journeyData = await Journey.findById(req.params.id);

    res.status(200);
    console.log('found');
    res.send(journeyData);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send('Something went wrong');
  }
};

module.exports = { getAllJourneys, getJourneysById };
