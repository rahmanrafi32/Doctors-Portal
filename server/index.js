const cors = require('cors');
const express = require('express');
require('dotenv').config();
const app = express();
let port = 3001;
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@firstcluster.bte1v.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(cors());

client.connect(err => {
  const appointmentCollection = client.db("doctors-portal").collection("appointment");
  console.log('connected');

  app.post('/addAppointment', (req,res)=>{
      const appointment = req.body;
      console.log(appointment);
      appointmentCollection.insertOne(appointment).then(result=>{result.insertedCount});
  })

  app.post('/appointmentsByDate', (req,res)=>{
    const date = req.body;
    console.log(date);
    appointmentCollection.find({date: date.date}).toArray((err,documents)=>{
        res.send(documents);
    })
})

app.get('/appointments', (req, res) => {
    appointmentCollection.find({})
        .toArray((err, documents) => {
            res.send(documents);
        })
})
});


app.get('/', (req,res)=>{
    res.send('server is working');
});

app.listen(port);
