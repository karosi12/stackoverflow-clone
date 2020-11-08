import mongoose from "mongoose";
const { Schema } = mongoose;

const questionSchema = new mongoose.Schema(
  {
    question: { type: String },
    userId: {  
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    subscribe: [{  
      type: Schema.Types.ObjectId,
      ref: "users",
    }],
    answers: [{
      userId:{  
        type: Schema.Types.ObjectId,
        ref: "users",
      },
      answer: {
        type: String
      }
    }],
    upvote: { type: Number, default: 0 },
    downvote: { type: Number, default: 0 },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

questionSchema.index({ '$**': 'text' });


const questionModel = mongoose.model("question", questionSchema);

export default questionModel;
