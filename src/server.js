import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


const app = express();
// Connecting to the database
const database = mongoose.connect('mongodb://admin:admin@cluster0-shard-00-00-6okpo.mongodb.net:27017,cluster0-shard-00-01-6okpo.mongodb.net:27017,cluster0-shard-00-02-6okpo.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',err => {
  if (err) {
    console.log(`Mongoose could not connect to ${database}.`)
    console.error(err)
  }
})

// setting body parser middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connection.on('connected', () => {
    console.info(`Mongoose connection has been connected.`)
  })
//API routes

// runing server
const port = 6000;
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})