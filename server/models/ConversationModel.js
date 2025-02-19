const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({
    text : {
        type : String,
        require : "Text is Require",
    },
    imageUrl : {
        type : String,
        default: "",
    },
    videoUrl : {
        type : String,
        default : "",
    },
    seen : {
        type : Boolean,
        default : false,
    }

},{
    timestamps : true,
})

const conversationSchema = new mongoose.Schema({
    sender : {
        type : mongoose.Schema.ObjectId,
        require : true,
        ref : "User",
    },
    receiver : {
        type : mongoose.Schema.ObjectId,
        require : true,
        ref : "User",
    },
    message : {
        type : mongoose.Schema.ObjectId,
        ref : "Message"
    }
},{
    timestamps : true,
})

const messageModel = mongoose.model("Message", messageSchema)
const coversationModel = mongoose.model("Conversation", conversationSchema)

module.exports = {
    messageModel,
    coversationModel,

}