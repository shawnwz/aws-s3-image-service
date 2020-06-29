const express = require("express");
const logger = require("morgan");
const app = express();
const port = process.env.PORT || 3000;


const uploadRoutes = require('./upload.route');
const getImageRoutes = require('./get.route');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));

app.get('/', (req, res) => res.send({message: 'Welcome !'}));
app.use('/api', uploadRoutes);
app.use('/api', getImageRoutes);
app.listen(port, () => console.log('listening at http://localhost:${port}'));



