const mongoose = require('mongoose');
const validator = require('validator');

const quizSchema = new mongoose.Schema({
    quizGeneralSetting:{

    },
    questionManager:{
        
    },
    questionOrder:{
        random :{
        type: Boolean,
        },
    },
    quizSharingShannels :{
        accessMode:{
             type: String,
            enum: ['private', 'embedded', 'public'],
            default: 'public'
        }
    },
    quizInstruction:{
        
    },
    quizGradAndSummary:{
    }
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
