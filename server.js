import dotenv from 'dotenv';
dotenv.config(".");
import mongoose from 'mongoose';
import app from './app.js';

process.on('uncaughtException', (err) => {
    console.log(err.name, err.message);
    process.exit(1);
})

// const DB = process.env.DATABASE;
// process.env.DATABASE.replace(
//     '<PASSWORD>',
//     process.env.DATABASE_PASSWORD,
// );
mongoose.connect("mongodb+srv://Quiz_user:BAALxFJgzw0gJMTC@cluster0.h5iid1p.mongodb.net/Time-Sheet?retryWrites=true&w=majority").then(() => {
    console.log('connected to database');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('server has listening on port ' + port);
});


process.on('unhandledRejection', (err) => {
    console.log(err.name, err.message);
    // process.exit(1);
});