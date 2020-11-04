const mongoose = require('mongoose');
const validator = require('validator');
const questionSchema = new mongoose.Schema({

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

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
