import mongoose from "mongoose"

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is Required"],
      unique: true,
      lowercase: [true, "Username should be lowercase"],
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: true,
      lowercase: [true, "Email should be lowercase"],
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export const User = mongoose.model("User", userSchema)
