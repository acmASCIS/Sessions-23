import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 30,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024,
    },
},
    { timestamps: true });

const User = mongoose.model('users', userSchema);
export default User;
