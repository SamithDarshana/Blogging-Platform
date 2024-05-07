const app = require("./app");
require("dotenv").config();

const db = require("./config/dbConnect");

const PORT = process.env.PORT || 3001;

db.connect((err) => {
  if (err) {
    console.log("Error connect database");
    return;
  }
  console.log("Connected to database");
});

app.listen(PORT, () => {
  try {
    console.log(`Server is listening on port : ${PORT}`);
  } catch (error) {
    console.log(`error: ${error}`);
  }
});
   