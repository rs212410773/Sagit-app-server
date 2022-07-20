const express = require('express');
const cors = require('cors')
const app = express();
const { port } = require('./config')
const logger = require('./log/logger')
const db = require('./db/mongoose')
const userRouter = require('./router/userRouter');
const categoryRouter = require('./router/categoryRouter');
const lessonRouter = require('./router/lessonRouter');
const stageRouter = require('./router/stageRouter');
const courseRouter = require('./router/courseRourer')
const { response } = require('express');

app.use(express.json());
app.use(cors());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
// ,()=>{response.setHeader('Access-Control-Allow-Origin', '*')})
// app.options('*', cors());

app.use('/user', userRouter)
app.use('/category', categoryRouter)
app.use('/course', courseRouter)
app.use('/stage', stageRouter);
app.use('/lesson', lessonRouter);

app.use((err, req, res, next) => {
    logger.error(err.message)
    if (err == 'user not exist') {
        res.status(204).send(err.message)
    }
    else
        res.status(500).send(err.message)
})
db.connect();
app.listen(port, (() => logger.info(`The server runing on port : ${port}`)))