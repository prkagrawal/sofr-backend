const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

const {connectDB, db} = require('./bin/mongoDb');
connectDB();

const port = process.env.PORT || '5000';

// controllers
// const rootRouter = require('./routes/root');
// const usersRouter = require('./routes/user');

// using middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

// app.use('/', rootRouter);
// app.use('/api/v1/user', usersRouter);

app.get('/', (req, res) => {
  res.send("Home");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
