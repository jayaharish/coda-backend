const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

//routes
const Signin = require("./Routes/Signin");
const verifyToken = require("./Routes/TokenValid");
const addProduct = require("./Routes/addProduct");
const products = require("./Routes/products");
const oneProduct = require("./Routes/oneProduct");
const getUserProducts = require("./Routes/getUserProducts");
const balance = require("./Routes/Balance");
const bidding = require("./Routes/Bidding");
const removeProduct = require("./Routes/removeProduct");

// const ProductRouter= require

const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(morgan("dev"));
// app.use(cookieParser());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );

// app.use("/signin", Signin);
// app.use("/verifyToken", verifyToken);
// app.use("/addProduct", addProduct);
// app.use("/products", products);
// app.use("/getProduct", oneProduct);
// app.use("/getuserproducts", getUserProducts);
// // app.use("/products",products)
// app.use("/balance", balance);
// app.use("/bidding", bidding);
// app.use("/removeproduct", removeProduct);

// app.get("/logout", (req, res, next) => {
//   res.clearCookie("user");
//   res.send();
// });

app.get("/", (req, res, next) => {
  res.write("Hello world");
  res.send();
});

http.createServer(app).listen(9999, function () {
  console.log("listening on port " + 9999);
});
