import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Paymentschema = new Schema({
  doctorname: {
    type: String,
    required: true,
  },
  Billno: {
    type: Number,
    required: true,
  },
  Tax: {
    type: Number,
    required: true,
  },
  
  Patientname: {
    type: String,
    required: true,
  },
  Fees: {
    type: Number,
    required:  [ true ,"Pending", "Accepted", "Rejected"],
  
  },

  status: {
    type: Number,
    default: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
export default mongoose.model("payments", Paymentschema);
