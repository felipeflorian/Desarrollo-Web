let express = require('express');
let multer = require('multer');
let fs = require('fs');
const cors = require("cors");
let url = "mongodb://localhost:27017";
const mongoose = require('mongoose');
mongoose.connect(url, {
    dbName: 'Proyecto',
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) : 
    console.log('Connected to yourDB-name database'));

const UserSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

let app = express(); // Instancia objeto

app.use(express.json());
app.use(cors());

app.get('/', function(req, res){
    res.send('Holi :)');
});

app.post('/signUp', async (req, res) => {
    const User = mongoose.model('users', UserSchema);
    User.createIndexes();
    try {
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            //delete result.password;
            res.send(req.body);
            console.log(result);
        } else {
            console.log("User already register");
        }
  
    } catch (e) {
        res.send("Something Went Wrong");
    }
});

app.post('/logIn', function(req, resp){
  let info = req.body;
  console.log(info);
  const User = mongoose.model('users', UserSchema);

  User.find({user: info.user}, function(err, res){
    if (err) throw err;
    let result = res[0];
    console.log(info.password);
    if(info.password == result.password){
        console.log("ingreso");
        resp.send("User correct");
    }else{
        resp.send("User incorrect");
    }
  });
  
});


app.listen(10013, () => {
    console.log('Conectando ...');
});
