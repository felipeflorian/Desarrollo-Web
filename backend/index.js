let express = require('express');
let multer = require('multer');
let fastCsv = require('fast-csv');
let fs = require('fs');
const cors = require("cors");
let url = "mongodb://localhost:27017";
let MongoClient = require('mongodb').MongoClient;
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

var storage =   multer.diskStorage({  
    destination: function (req, file, callback) {  
      callback(null, './uploads');  
    },  
    filename: function (req, file, callback) {  
      callback(null, file.originalname);  
    }  
  });  

var upload = multer({ storage : storage}).single('myfile');  


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

app.post('/subir-tabla', function(req, res){
    upload(req, res, function(err){
        if (err){
            return res.end('Error uploading file.')
        }
        processCsv(req, res);
    });
});

function processCsv(req, res){
    let name =  `./uploads/${req.file.filename}`;
    let stream = fs.createReadStream(name);
    let data_ = [];

    let csvStream = fastCsv.parse().on('data', function(row){
        data_.push(row);
    }).on('end', function(){
        data_.shift();
        console.log(data_);
        fs.unlinkSync(name);
        MongoClient.connect(url, function(err, db){
            if (err) throw err;

            var route = db.db('Proyecto');

            var deliverys = [];

            for(let i = 0; i < data_.length; ++i){
                var info_fifa = {user : data_[i][0], average_goals : data_[i][1], pass : data_[i][2], played : data_[i][3], rate : data_[i][data_[i].length - 1], juego : 'Fifa'};
                var info_forza = {user : data_[i][0], first: data_[i][1], average_speed : data_[i][2], average_2 : data_[i][3], rate : data_[i][4], juego : 'Forza'};
                var info_war = {user : data_[i][0], kills: data_[i][1], aim : data_[i][2], rate : data_[i][3], level : data_[i][4], juego : 'Warzone'};
                deliverys.push(info_fifa);
            };
            console.log(deliverys);
            route.collection('juegos').insertMany(deliverys, function(err, res){
                if (err) throw err;
                console.log(res.insertedCount + " ... ");
                db.close();
            });
        });
    });
    console.log(data_);
    stream.pipe(csvStream);
    res.send("hola");
};

app.post('/datos', function(req, res){
    const User = mongoose.model('juegos', UserSchema);
    User.createIndexes();
    var juego_ = req.body.juego;
    var userMap = [];
    var query = {juego: juego_};
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("Proyecto");
        
        dbo.collection("juegos").find(query).toArray(function(err, result) {
          if (err) throw err;
        
          var data_ = [];
          for(let i = 0; i < 5; ++i){
            data_.push(result[i]);
          }
          console.log(data_);
          db.close();

          res.json(data_);
        });
    });
       
});

app.post("/cambiar", function(req, res){
    const info_ = req.body;
    const query = {user: info_.user};
    //console.log("AAAAAAAAAA");
    console.log(query);
    const User = mongoose.model('users', UserSchema);
    var nuevoEstado = {password: info_.password};
    User.updateOne(query, nuevoEstado, function(err, docs){
    if (err){
        res.send('error');
    }else{
        res.send('Se cambio la contraseña');
    }
    });
});

app.listen(10013, () => {
    console.log('Conectando ...');
});
