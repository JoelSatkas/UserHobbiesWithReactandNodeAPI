import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const HobbySchema = new Schema({
    name: {
        type: String,
        required: 'Enter a first name'
    },
    passionLevel: {
        type: String,
        required: 'Enter a last name'
    },
    year: {
        type: Date,
        default: Date.now
    }
});
