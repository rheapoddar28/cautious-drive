const express = require('express');
const port = 3000;

const app = express();
const bodyParser = require('body-parser');
// 
require('./db'); // requiring database 
require('./model/User'); // and model
//
const authRoutes = require('./Routes/authoRoutes');
const requireToken = require('./Middlewares/AuthTokenRequired');
//
app.use(bodyParser.json());
app.use(authRoutes);
//

app.get('/', requireToken, (req, res) => {
    console.log(req.user);
    //res.send("This is SignUp page");
    res.send(req.user);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})