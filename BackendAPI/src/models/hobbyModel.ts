import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const HobbySchema = new Schema({
    name: {
        type: String,
        required: 'Enter a hobby name'
    },
    passionLevel: {
        type: String,
        required: 'Enter a passion level'
    },
    year: {
        type: Date,
        default: Date.now
    }
});
