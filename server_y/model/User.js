// model is used for givng information in structure data
// example : email type verification , if some section is empty then can send information required
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true

    },
    emergencyNum:
    {
        type: String,
        required: true
    }

})

userSchema.pre('save', async function (next) { // before saving user make this function
    const user = this;
    console.log("Just before saving before hashing  ", user.password);
    if (!user.isModified('password')) { // if the password is already hashed then 
        return next(); // do nothing and goes to the next iteration
    }
    user.password = await bcrypt.hash(user.password, 8); // hash it  around 8 rounds
    console.log("Just before saving & after hashing", user.password); // printing the hash password
    next();
})


mongoose.model("User", userSchema);