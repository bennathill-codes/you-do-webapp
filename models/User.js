const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    firstName:String,
    lastName:String,
    username:{type:String,required:true},
    password:{type:String,required:true}
});

// Encrypt the registered password
userSchema.pre("save", async function(next){
    const user = this;
    // if user is not changes or new, go next
    if(!user.isModified) return next();
    
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(user.password,salt);
    user.password = hash;

    next();
});

// Ensure password is encrypted for log in
userSchema.methods.checkPassword = async function (password){
    return bcrypt.compare(password, this.password);
}

const User = mongoose.model("User",userSchema);

module.exports = User;