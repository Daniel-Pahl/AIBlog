import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json)

app.get('/', (req, res) => {
    res.send("Hello from Daniel Pahl or bakari what what")
});

app.post('/api', (req, res) => {
    console.log(req.body);
    res.send(req.body)
});


mongoose.connect('mongodb+srv://admin:dp@cluster0.z7zoqq4.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected!');
    app.listen(3000, () => {
        console.log("Listening on port 3000")
    });
})
.catch(() => {
    console.log("Not Connected")
  })