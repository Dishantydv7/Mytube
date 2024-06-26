import mongoose , {Schema} from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"


const videoModel =  new mongoose.Schema({
        videoFile : {
            type : String , 
            required : true  , 
        } , 
        thumbnail : {
            type : String , 
            required : true  ,  
        } ,
        description : {
            type : String , 
            required : true  ,  
        } , 
        title : {
            type : String , 
            required : true  ,  
        } ,
        duration : {
            type : Number , 
            required : true  ,  
        } ,
        views : {
            type : Number  , 
            default : 0 
        } ,
        isPubished : {
            type : Boolean , 
            default : true  ,  
        } ,
        owner : {
            type : Schema.Types.ObjectId , 
            ref : "User"
        }
} , {timestamps : true})

videoModel.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video" , videoModel )