const express = require("express");
const app  = express();
const connectDatabase = require('./config/dbConfig');
app.use(express.json());
require("dotenv").config({ path: './config/.env' });

const cors = require('cors');


const allowedOrigins = [
  "bookmydoc-b9wd4trnq-shikha-guptas-projects-5955c136.vercel.app",
    "http://localhost:3000",
  ];
  app.use(
    cors({
      origin: allowedOrigins,
      credentials: true,
    })
  );

//connecting to database
connectDatabase();


const userRouter = require('./routes/userRoutes');
const adminRouter = require('./routes/adminRoutes');
const doctorRouter = require('./routes/doctorRoutes');

app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server is running on Port:", PORT);
})