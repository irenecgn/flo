const Journey = require('../models/Journey');
// const Note = require('../models/Notes');

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

// const postNewNote = async function (req, res) {
//   try {
//     console.log(req.body);
//     const noteCreated = await Note.create(req.body);
//     res.status(201);
//     res.send(noteCreated);
//   } catch (error) {
//     console.log(error);
//     res.status(500);
//     res.send('Something went wrong');
//   }
// };

const addNewNote = async function (req, res) {
  try {
    const data = req.body.note;
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

module.exports = { getAllJourneys, getJourneysById, addNewNote };
