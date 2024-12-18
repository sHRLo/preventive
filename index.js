import express from "express";
import cors from "cors";
import { adminRouter } from "./Routes/AdminRoute.js";
import { OperatorRouter } from "./Routes/OperatorRoute.js";
import jwt from "jsonwebtoken";
import CookieParser from "cookie-parser";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/operator", OperatorRouter);
app.use("/auth", adminRouter);

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, "jwt_secret_key", (err, decoded) => {
      if (err) return res.json({ Status: false, Error: "Wrong Token" });
      req.id = decoded.id;
      req.role = decoded.role;
      next();
    });
  } else {
    return res.json({ Status: false, Error: "Not Authenticated" });
  }
};
app.get("/verify", verifyUser, (req, res) => {
  return res.json({ Status: true, role: req.role, id: req.id });
});
app.listen(3000, () => {
  console.log("Server is Running...");
});
