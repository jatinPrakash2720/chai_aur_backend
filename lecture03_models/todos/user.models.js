import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      lowercase: [true, "Must be Lowercase"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: [true, "Must be Lowercase"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      min: [6, "Must be at least 6"],
    },
    // username:String,
    // email:String,
    // isActive:Boolean,
  },
  { timestamps: true } // it automatically --> put two properties : createdAt , updatedAt
)

export const User = mongoose.model("User", userSchema) // but in database: "User" becomes "users",,, yani ki,,, plural + lowercase
