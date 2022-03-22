const express = require ('express');
const app = express();
const mangoose = require('mongoose');
const bodyparser = require('body-parser')

app.use(bodyparser.json())




const postsRoute = require('./routes/countries');

app.use('/countries',postsRoute)

app.get('/',(req, res) => {
    
    res.send("<p>home page</p>");
})





mangoose.connect('mongodb+srv://oussama:0000@affectum.j1l4f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{useNewUrlParser: true,
    useUnifiedTopology: true},
)
.then(() => console.log("Database connected!"))
 .catch(err => console.log(err));

app.listen(3000);