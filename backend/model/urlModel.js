const {Schema, model} = require("mongoose")
const shortid = require("shortid")

const urlSchema = new Schema ({
    full:{
        type:String, 
        required:true
    },
    short:{
        type:String, 
        required:true, 
        default:shortid.generate
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"Üser", 
        required:true
    }
},{
    toJSON:{virtuals:true}
})

const Url = model("Url", urlSchema)
module.exports = Url