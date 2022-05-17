const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    source: {
        type: String
    },
    published_date: {
        type: Date
    },
    DOI: {
        type: String
    },
    ClaimedBenefit: {
        type:String
    },
    LevelofEvidence:{
        type:String
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Article = mongoose.model('article', ArticleSchema);