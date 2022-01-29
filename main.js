import express from 'express';
import web from './routes/listener.js'
import error from './routes/error.js'
import router from './routes/router.js'
import dotenv from 'dotenv'

dotenv.config()

let app = express();

app.use(express.json());

app.use('/', router)

error.handle();

web.listen(app, process.env.PORT)