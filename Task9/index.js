let bodyParser = require('body-parser');
let express =  require('express');
let app = express();

let urlencodedParser = bodyParser.urlencoded({ extended: false })


//const DataRepository = require('./dataRepository');

//const dataRepository = new DataRepository('julia_klepitskaia_data1.json');
//const repositories = [dataRepository];

//app.get('/data/', (_, res) => res.status(200).send(dataRepository.getAll()));

app.set('view engine', 'ejs');

app.use('/public', express.static('public') );

app.get('/about', function(req, res){
    res.render('about');
   });

app.post('/about',urlencodedParser, function(req, res){
    console.log(req.body);
        res.render('student', {data:req.body});
   });

 app.get('/student', function(req, res){
    res.render('student');
   });

app.listen(3000, () => console.log('Server was runned on 3000 port'));

  

