require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const axios = require("axios");
const session = require("express-session");
const cors = require("cors");
const port = 3010;

const {
  getListings,
  removeListing,
  addListing,
  getItem
} = require("./controllers/mainCtrl");

const app = express();

app.use(json());
app.use(cors());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1209600000 // two weeks
    }
  })
);

//endpoints
app.get("/api/listings", getListings);
app.get("/api/item/:id", getItem);
app.delete("/api/delete/:id", removeListing);
app.post("/api/listings", addListing);

//Massive

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  //     dbInstance
  //       .alter_table()
  //       .then(response => {
  //         console.log(response);
  //       })
  //       .catch(e => console.log(e));
  //   })
  //   .catch(error => {
  //     console.log(error);
});

//Express.static to join the files to build ---- when ready, run "npm run build"

/*
app.use(express.static(`${__dirname}/../build`));

app.get('*', (req,res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html');)
})
*/

app.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);
});
