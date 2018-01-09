const DB=require('./ConnectionDB.js');
class User extends DB{
	
	getall(callback){
    let conn=this.getconnect();
	conn.connect(function(err) {
  if (err) throw err;
   conn.query("SELECT * FROM users", function (err, result, fields) {
    if (err) throw err;
    callback(result);
   
  });
});
	}
    saveuser(user,callback){
    let conn=this.getconnect();
   let query = conn.query('INSERT INTO users SET ?', user, function(err, result) {
    user.id=result.insertId;
    callback(user);
});
console.log(query.sql);

}
updateuser(user,callback){
    let conn=this.getconnect();
   let requete="UPDATE users SET nom='"+user.nom+"' , prenom='"+user.prenom+"' WHERE id="+parseInt(user.id);

   let query = conn.query(requete, function(err, result) {
    console.log(result.affectedRows + " record(s) updated");
    callback(user);
});

}

deleteuser(id,callback){
   let conn=this.getconnect();
   let query = conn.query('DELETE FROM users WHERE id='+id, function(err, result) {
    callback(result);
});
}

getuser(id,callback){
  let conn=this.getconnect();
  conn.connect(function(err) {
  if (err) throw err;
   conn.query("SELECT * FROM users WHERE id="+id, function (err, result, fields) {
    if (err) throw err;
    callback(result);
  });
});
}
}

module.exports=new User();