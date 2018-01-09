var path = require('path');
const UserController=require('./Controllers/UserController.js');

module.exports=function(app) {
 app.get('/',UserController.index);
 app.get('/getallusers',UserController.getallusers);
 app.post('/saveuser',UserController.saveuser);
 app.post('/updateuser',UserController.updateuser);
 app.get('/delete/:id',UserController.deleteuser);
 app.get('/infouser/:id',UserController.getuser);
 app.get('*',function(req,res){res.sendFile(path.join(__dirname ,'./index.html'));})
}