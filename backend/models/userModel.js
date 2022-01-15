import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },

     email: {
        type:String,
        required:true,
        unique:true
    },


  password: {
        type:String,
        required:true
    },


  isAdmin: {
        type:Boolean,
        required:true,
        default: false
    }


}, {
    timestaps:true
})

const User = mongoose.model('User', userShcema)

export default User