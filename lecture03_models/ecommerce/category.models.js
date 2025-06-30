import mongoose from "mongoose"

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export const Category = mongoose.model("Category", categorySchema) //--> category become categories, also if i give categories it will become categories
