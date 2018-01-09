const express = require('express')
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// prepare server
app.use('/', express.static(__dirname + '/')); // redirect root
app.use('/node', express.static(__dirname + '/node_modules'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist')); // redirect bootstrap JS
app.use('/font', express.static(__dirname + '/node_modules/font-awesome'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/model', express.static(__dirname + '/model'));

 const Routes=require('./Routes.js')(app);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})