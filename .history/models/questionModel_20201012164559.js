const mongoose = require('mongoose');
const validator = require('validator');

const qusetionSchema = new mongoose.Schema({

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

const Quiz = mongoose.model('Quiz', questionSchema);

module.exports = Quiz;
