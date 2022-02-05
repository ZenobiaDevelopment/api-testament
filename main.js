import express from 'express';
import Listener from './routes/listener.js';
import router from './routes/router.js';
import testament from 'testament-cli';
import dotenv from 'dotenv';

let web = new Listener();

dotenv.config();

let app = express();

app.use(express.json());

app.use('/', router);

web.once('ready', () => {
    testament.animateSuccess('Listening on port ' + process.env.PORT);
});

web.listen(app, process.env.PORT);
