const mysql = require('mysql');

 module.exports=class DB {

constructor(){
this.mysql=mysql;
this.host="localhost";
this.user="root";
this.password="";
this.database="node";

}
getconnect(){
  let conn = this.mysql.createConnection({
  host: this.host,
  user: this.user,
  password: this.password,
   database: this.database
});
  return conn;
}

}
 
