const jwt = require('jsonwebtoken'); // Middleware is used in when the user want to access the app, it will check whether the user has the token to use the app and if not it will redirect it to the login page 
const mongoose = require('mongoose'); // kisi bhi page kai load hone se pehlai jo chiz chalti hai woh hotta hai middleware
const User = mongoose.model("User");

module.exports = async (req, res, next) => {  //next is used for 
   //try {
   const { authorization } = req.headers;
   console.log(authorization);
   // authorization === Bearer ewfjwefjwef
   if (!authorization) {
      return res.status(401).json({ error: "You must be logged in, token not given" });
   }
   const token = authorization.replace("Bearer ", "");
   //console.log(token);
   const decoded = jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err) {
         return res.status(401).json({ error: "you must be logged in , token invalid" });
      }
     

      const { _id } = payload; // comparing id
      User.findById(_id).then(userData => {
         req.user = userData; // if id matches with user , store the data of user
         next();
      })
   })
} 
