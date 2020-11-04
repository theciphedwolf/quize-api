const mongoose = require('mongoose');
const validator = require('validator');

const QuizSchema = new mongoose.Schema({

    quizGeneralSetting:{

    }
    ,
    questionManager:{},
    questionOrder:{
        random :{
        type: Boolean,
        }
    },
    quizSharingShannels :{

    },
    quizInstruction:{

    },
    quizGradAndSummary:{

    }
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
