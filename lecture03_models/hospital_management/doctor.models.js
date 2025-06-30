import mongoose from "mongoose"

const hrsInHospital = new mongoose.Schema({
  hospitalName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
    required: true,
  },
  Hours: {
    type: Number,
    required: true,
  },
})
const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salar: {
      type: Number,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      required: true,
      default: 0,
    },
    worksInHospital: {
      type: [hrsInHospital],
    },
  },
  { timestamps: true }
)

export const Doctor = mongoose.model("Doctor", doctorSchema)
