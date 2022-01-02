const express = require('express');
const cors = require('cors');


const app = express();

// middleware
app.use(cors());

// file dependancies
const bourbonRt = require('./routes/bourbonRt');
app.use('/collection', bourbonRt);

app.use((err, req, res, next) => {
    res.locals.error = err;
    const status = err.status || 500;
    res.status(status);
    res.render('error');
  });

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Connection Successful on Port ${port}`));