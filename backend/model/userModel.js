const {Schema, model} = require("mongoose")

const userSchema = new Schema({
    username:{
        type:String
    },
    password:{
        type:String,
        minlength:[8, 'Minimum password length is 8 character'],
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
},
{
    toJSON: { virtuals: true },
}
)

userSchema.virtual("links", {
    ref:"Url", 
    localField:"_id",
    foreignField:"user"
})

const User = model("User", userSchema)
module.exports = User