import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true, "username is required"]
    },
    gmail : {
        type : String,
        required : [true, "gmail is required"]
    },
    password : {
        type : String,
        required : [true, "password is required"]
    },
}, {timestamps : true});

userSchema.pre("save", async function (next) {
    // password encrypt karne ke liye
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
  });
  
  userSchema.methods.isPasswordCorrect = async function (password : string) {
    return await bcrypt.compare(password, this.password);
  };
const userModel = mongoose.models.users || mongoose.model('users', userSchema);

export default userModel;