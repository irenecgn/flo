const Journey = require('../models/Journey');

const getAllJourneys = async function (req, res) {
  try {
    const journeys = await Journey.find({}, '_id coordinates title');
    res.status(200);
    res.send(journeys);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send('Something went wrong');
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

const addNewNote = async function (req, res) {
  try {
    const data = req.body.note;
    console.log(data);
    const addNote = await Journey.findByIdAndUpdate(
      req.params.id,
      {
        $push: { notes: [{ note: data }] },
      },
      { returnDocument: 'after' }
    );
    res.status(201);
    res.send(addNote);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send('Something went wrong');
  }
};

const deleteNoteById = async function (req, res) {
  try {
    const { journeyId, id } = req.params;
    const data = await Journey.findByIdAndUpdate(journeyId, {
      $pull: { notes: { _id: id } },
    });
    res.status(204);
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send('Something went wrong');
  }
};

const addNewRestaurant = async function (req, res) {
  try {
    const restaurant = req.body;
    const addRestaurant = await Journey.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          restaurants: [restaurant],
        },
      },
      { returnDocument: 'after' }
    );
    res.status(201);
    res.send(addRestaurant);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send('Something went wrong');
  }
};

module.exports = {
  getAllJourneys,
  getJourneysById,
  addNewNote,
  deleteNoteById,
  addNewRestaurant,
};
