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
        ref:"User", 
        required:true
    }},
// },{
//     toJSON:{virtuals:true}
// }
{
    timestamps: true
  }
)

const Url = model("Url", urlSchema)
module.exports = Url