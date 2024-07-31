import mongoose from "mongoose";



const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "First Name Is Required!"],
    
  },

  email: {
    type: String,
    required: [true, "Email Is Required!"],
    
  },
  phone: {
    type: String,
    required: [true, "Phone Is Required!"],
    minLength: [10, "Phone Number Must Contain Exact 11 Digits!"],
    maxLength: [10, "Phone Number Must Contain Exact 11 Digits!"],
  },
  nic: {
    type: String,
    required: [true, "NIC Is Required!"],
    minLength: [13, "NIC Must Contain Only 13 Digits!"],
    maxLength: [13, "NIC Must Contain Only 13 Digits!"],
  },
  dob: {
    type: Date,
    required: [true, "DOB Is Required!"],
  },
  gender: {
    type: String,
    required: true,
  },
  appointment_date: {
    type: String,
    required: [true, "Appointment Date Is Required!"],
  },
  doctorDepartment: {
    type: String,
    required: [true, "Department Name Is Required!"],
  },
 

  
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
  createdAt: {
    type: Date,
    default: Date.now()
}
});

export default mongoose.model("Appointment", appointmentSchema);