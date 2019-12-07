import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const HobbySchema = new Schema({
    _id: {
        type: String
    },
    name: {
        type: String
    },
    passionLevel: {
        type: String
    },
    year: {
        type: Date,
        default: Date.now
    }
});
