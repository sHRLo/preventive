import mysql from "mysql";

const con = mysql.createConnection({
  host: "10.0.1.7",
  user: "Reza",
  password: "Re@123456",
  database: "PM",
  port: 1443
});

con.connect(function (err) {
  if (err) {
    console.log(err, "Connection Error");
  } else {
    console.log("Connected Successfully");
  }
});

export default con;
