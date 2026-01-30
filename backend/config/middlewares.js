const boryParser = require('body-parser');
const cors = require('cors');
module.exports = (app) => {
  app.use(boryParser.json());
  app.use(cors());
};