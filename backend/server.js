const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = require('./index');

dotenv.config('.env');

const db = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose.set('strictQuery', false);
mongoose.connect(db).then(() => {
  console.log('DB CONNECTED SUCCESSFULLY');
});
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`APP STARTED ON ${PORT}`);
});
