const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/knowledge', { useNewUrlParser: true, useUnifiedTopology: true })
// .catch(error => {});