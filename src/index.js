const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const accountRoute = require("./routes/accountRoute");
const addressRoute = require("./routes/addressRoute");
const hotelRoute = require("./routes/hotelRoute");
const roomRoute = require("./routes/roomRoute");
const bookRoute = require("./routes/bookRoute");
const cloudinaryRoute = require("./routes/cloudinaryRoute");

const {
  errorHandler,
  handleErrorNotFound,
} = require("./middlewares/errorMiddleware");
const connectDB = require("./config/db");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

connectDB();

app.get("/", (req, res) => {
  throw new Error("asdasdas");
});
app.use("/v1/account", accountRoute);
app.use("/v1/address", addressRoute);
app.use("/v1/hotel", hotelRoute);
app.use("/v1/room", roomRoute);
app.use("/v1/book", bookRoute);
app.use("/v1/cloudinary", cloudinaryRoute);

app.use(handleErrorNotFound);
app.use(errorHandler);

app.listen(process.env.PORT || 8081, () => {
  console.log("app listen in port " + process.env.PORT);
});
