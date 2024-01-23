const mongoose = require("mongoose")

const UserSchema=mongoose.Schema({
    username: { type:String , required:true , unique:true },
    password:{ type:String , required:true }
})


// créons la table users qui va stocké le nom et le mot de passe de notre utilisateurs
const userModel = mongoose.model("users", UserSchema);
module.exports = userModel;
