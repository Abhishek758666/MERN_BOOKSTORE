require("dotenv").config();
const express = require("express");
const dbConnect = require("./utils/db");
const cors = require("cors");

const BookRouter = require("./routers/BookRouter");
const UserRouter = require("./routers/UserRouter");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/books", BookRouter);
app.use("/user", UserRouter);

dbConnect()
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log(`server working at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
