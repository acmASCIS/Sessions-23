const express = require('express');
const userRouter = require('./src/router/userRouter');

const app = express();
app.use(express.json());


app.use('/api/users', userRouter)
// app.use('/api/posts')
app.listen(3000, () => {
    console.log('server is listining to port 3000')
})