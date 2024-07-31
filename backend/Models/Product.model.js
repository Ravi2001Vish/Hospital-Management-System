import mongoose from "mongoose";



const Schema = mongoose.Schema;

const Productschema = new Schema({
    name: {
        type: String,
        required: [true, "First Name Is Required!"],
    
      },
email:{
    type:String,
    required:true
},

  phone:{
    type:Number,
required:true
  },
 nic:{
type:Number,
required:true
 },
  dob:{
    type:Date,
    required:true
  },
gender:{
    type:String,
    required:true
},
doctorDepartment:{
    type:String,
    required:true
},
    thumbnail: {
        type: String,
        default: null
    },
    images: {
        type: Array,
        default: null
    },
    status: {
        type: Number,
        default: 1
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})
export default mongoose.model('products', Productschema);

