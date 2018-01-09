var path = require('path');
const User=require('../Models/User.js');
class UserController {

index(req, res) {
    res.sendFile(path.join(__dirname ,'../index.html'));

}

getallusers (req, res) {
User.getall(function(result) {
  res.setHeader('Content-Type', 'application/json');
 res.send(JSON.stringify({ a:result}));
});

}

saveuser(req,res){
	let user=req.body.user;
	User.saveuser(user,function(user){
	res.send(JSON.stringify({user}));
	});
}
updateuser(req,res){
	let user=req.body;
	User.updateuser(user,function(user){
		res.send(JSON.stringify({user}));
	});
}
deleteuser(req,res){
	let id=req.param('id');
	User.deleteuser(id,function(result){
		if(result.affectedRows>0)
		res.send('ok'); else res.send('notfound');
	});
}
getuser(req,res){
	let id=req.param('id');
	User.getuser(id,function(result){
   res.send(JSON.stringify({user:result}));
	});
}
}

module.exports=new UserController();