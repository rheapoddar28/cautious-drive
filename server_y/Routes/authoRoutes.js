const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("User");
const jwt = require('jsonwebtoken');
// 
require('dotenv').config();
const bcrypt = require('bcrypt');



//

router.post('/signup', async (req, res) => {
    //  res.send('This is Signupppp Page');
    console.log('sent by client - ', req.body);
    const { name, email, password, cpassword, emergencyNum } = req.body;
    if (!name || !email || !password || !cpassword || !emergencyNum) {
        return res.status(422).json({ error: "Please add all the fields" });
    }


    User.findOne({ email: email }) // if email exists already
        .then(async (savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "Invalid Credentials" }); // for hacker's to not know what already esist
            }

            const user = new User({
                name,
                email,
                password,
                emergencyNum,
            })

            try {
                await user.save();
                const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET); // generating a key
                res.send({ token });
                //res.send({ message: "User Saved Succesfully" });
            }
            catch (err) {
                console.log('db err', err);
                return res.status(422).send({ error: err.message });
            }

        })
})


//Creating loginRoute
//router.post('/verify', (req, res) => {
//console.log('sent by client - ', req.body);
//const { name, email, password } = req.body;



//})


router.post('/signin', async (req, res) => { //async 
    const { email, password } = req.body; // find email and the password it matches
    if (!email || !password) {
        return res.status(422).json({ error: "Please add email or password" }); // if the user has not filled in any login details
    }
    const savedUser = await User.findOne({ email: email }) //await

    if (!savedUser) {
        return res.status(422).json({ error: "Invalid Credentials" });
    }

    try {
        bcrypt.compare(password, savedUser.password, (err, result) => {// either error or result will print out
            if (result) {
                console.log("Password matched");
                const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET); // generate the token again in signIn
                res.send({ token }); // this token will only  be obtained if the login credintals are valid and is matched with the signup data 
            }
            else {
                console.log('Password does not match');
                return res.status(422).json({ error: "Invalid Credentials" });
            }
        })
    }
    catch (err) {
        console.log(err);
    }
})

module.exports = router;