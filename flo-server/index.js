const Express = require('Express');
const app = new Express();
const router = require('./router/router');

const PORT = 3030;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/flo').then(() => {
  console.log('Connected to DB 🗺');
});

app
  .use(Express.json())
  .use(router)
  .listen(PORT, () => {
    console.log(`Server listen on port ${PORT} 🗺`);
  });
