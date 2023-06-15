const mongoose = require("mongoose");

const testquestionSchema = new mongoose.Schema({
  question: {
    type: String,
  },
  options: [
    {
      ans: {
        type: String,
      },
    },
  ],
  correctOptions: [
    {
      correct: {
        type: String,
    },
   }
  ],
  multipleAnswers: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("TestQues", testquestionSchema);
