import mongoose from "mongoose";
import bcript from 'bcrypt';
import jwt from 'jsonwebtoken'


const userSchema = new mongoose.Schema({
    fullname : {
        firstname: {
            type: String,
            required: true,
            minlength: [3, "First name must be at least 3 charectes"]
        },

        lastname: {
            type: String,
            required: true,
            minlength: [3, "Last name must be at least 3 charectes"]
        },
    },

    email : {
        type: String,
        required: true,
        unique: true,
        minlength: [5, "Email must be at least 3 charectes"]
    },

    password: {
        type: String,
        required: true,
        select : false,
    },

    socketId: {
        type: String,
    }

})

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET)
    return token;
}

userSchema.methods.comparePassword = async function (password) {
    return await bcript.compare(password, this.password)
}

userSchema.statics.hashPassword = async function (password) {
    return await bcript.hash(password, 10)
}

const userModel = mongoose.model('User', userSchema);

export default userModel;