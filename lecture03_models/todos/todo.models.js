import mongoose from "mongoose"

const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subTodos: {
      //Array of Sub Todos
      type: [
        {
          type: mongoose.Schema.Types,
          ObjectId,
          ref: "SubTodo",
        },
      ],
    },
  },
  { timestamps: true }
)

export const Todo = mongoose.model("Todo", todoSchema)
