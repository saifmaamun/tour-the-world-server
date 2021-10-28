const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');


// 
app.use(cors());
app.use(express.json());
require('dotenv').config();



// 
const { MongoClient } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ogqtm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



// 
async function run() {
    try {
        console.log('from function')
    } finally {
        // await client.close();
    }
}
run().catch(console.dir);




// 
app.get('/', (req, res) => {
    console.log('connected from get')
    res.send('Hello World! from heroku')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})