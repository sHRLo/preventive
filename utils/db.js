import mysql from "mysql2";

const con = mysql.createConnection({
  host: "10.0.1.7",
  user: "Reza",
  password: "Re@123456",
  database: "PM",
  connectTimeout: 10000

});

con.connect(function (err) {
  if (err) {
    console.log("Connection Error", err);
    return;
  } else {
    console.log("Connected Successfully");
  }
});

export default con;
