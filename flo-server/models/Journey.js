const mongoose = require('mongoose');

const JourneySchema = new mongoose.Schema({
  coverImg: {
    type: String,
  },
  title: {
    type: String,
  },
  durationInDays: {
    type: Number,
  },
  accomodation: {
    type: String,
  },
  coordinates: {
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
  stages: [
    {
      title: {
        type: String,
      },
      description: {
        type: String,
      },
      todos: [
        {
          name: {
            type: String,
          },
          completed: Boolean,
          default: false,
        },
      ],
    },
  ],

  restaurants: [
    {
      name: {
        type: String,
      },
      address: {
        type: String,
      },
      cuisineTypes: {
        type: [String],
      },
      suggestedFor: {
        type: [String],
      },
    },
  ],
  notes: [
    {
      note: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model('Journey', JourneySchema);
