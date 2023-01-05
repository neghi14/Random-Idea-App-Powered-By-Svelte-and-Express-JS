const mongoose = require('mongoose');

const app = require('./index');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/IdeaApp').then(() => {
  console.log('DB CONNECTED SUCCESSFULLY');
});
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`APP STARTED ON ${PORT}`);
});
