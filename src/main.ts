import { userRouter } from './routes/routes';

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', userRouter);

const PORT = 8000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));