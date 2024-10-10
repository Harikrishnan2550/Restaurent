import mongoose from "mongoose";

const restaurentSchema= new mongoose.Schema(
    {
        // id:{
        //     type:Number,
        //     required:true
        // },

        date:{
            type:Date,
            required:true,
            default:Date.now()
        },

        pname:{
            type:String,
            required:true
        },

        cname:{
            type:String,
            required:true
        },

        quantity:{
            type:Number,
            required:true
        },

        price:{
            type:Number,
            required:true
        },

        location:{
            type:String,
            required:true
        },

        status:{
            type:String,
            required:true,
            default:"pending"
        }, 

   },
      {
    timestamps: true
      }
)

const restaurentModel=mongoose.model("restaurentModel",restaurentSchema)

export default restaurentModel;