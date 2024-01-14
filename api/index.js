import express from 'express';
import mogoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mogoose.connect(process.env.MONGO).then(() => {
    console.log('connected to mongodb');
})
.catch((err) => {
    console.log('err: ', err);
});

const app = express();

app.listen(3000, () => {
    console.log('server running in port 3000..');
});