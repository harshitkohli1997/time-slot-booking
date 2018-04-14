const express =  require('express');

const mongoose = require('mongoose');
const Station = require('./models/station')
  // Connect to MongoDB
mongoose.connect('mongodb://harshit:scooby1234@ds257077.mlab.com:57077/social-dev'
  )
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

   

// Initialize http server
const app = express();

app.get('/', (req,res) => {
  res.send('welcome');
})

app.get('/show', (req,res) => {
   Station.find({status:false})
   .then(station => {
     res.json(station);
   })
});

app.put('/book/:id', (req, res) => {
  Station.findOne({
    _id: req.params.id
  })
  .then(stn => {
    // new values
    stn.status = true;
   stn.save()
   .then(stn => {
     console.log('booking is req');
   })
    // userno = req.body.userno;
  });
    // stn.save()
    //   .then(stn => {
    //     console.log('booking is requested');
    //   })
  });


// Logger that outputs all requests into the console

// Use v1 as prefix for all API endpoints
// app.use('/v1', router);
port = process.env.port || 3000;
const server = app.listen(port, () => {
    console.log(`Listening at ${port}`);
});

