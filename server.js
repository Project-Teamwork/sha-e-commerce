const express = require('express');
const app = express();
require('dotenv').config();
const bodyparser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const port = process.env.PORT || 3636;
const cors = require('cors');
const authRouter = require('./routers/authRoute');
const User = require('./modules/userModule');
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/users", authRouter)





// server listening
app.listen(port, () => {
  console.log(`Server is up at ${port}`);
});
