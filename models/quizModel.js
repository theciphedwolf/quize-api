const mongoose = require('mongoose');
const validator = require('validator');

const quizSchema = new mongoose.Schema(
  {
    quizBasicSetting: {
      title: {
        type: String,
        required: [true, 'Please Enter Quiz Title']
      },
      category: {
        type: String,
        required: [false, 'Please Enter Quiz Category']
      },
      description: {
        type: String,
        required: [true, 'Please Enter Quiz Description']
      },
      language: {
        type: String,
        required: [true, 'Please Enter Quiz Language'],
        enum: ['arabic', 'english']
      }
    },
    questionManager: {},
    questionOrder: {
      random: {
        type: Boolean
      }
    },
    quizSharingShannels: {
      accessMode: {
        type: String,
        enum: ['private', 'embedded', 'public'],
        default: 'public'
      }
    },
    timerSetting: {
      questionBasedTiming: {
        type: Boolean
      },
      manualActivation: {
        type: Boolean
      }
    },
    quizInstructions: {
      instructions: {
        type: String
      },
      quizInitiationForm: {
        type: []
      }
    },
    quizGradAndSummary: {
      passMarks: {
        type: String
      },
      showMessage: {
        type: Boolean
      },
      passText: {
        type: String
      },
      failText: {
        type: String
      },
      endText: {
        type: String
      },
      sms: {
        type: Boolean
      },
      feedback: {
        type: Boolean
      },
      email: {
        type: Boolean
      }
    }
  },
  { timestamps: { createdAt: 'created_at' } }
);

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
