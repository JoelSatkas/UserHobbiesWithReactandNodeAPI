import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a name'
    },
    hobbies: {
        type: [String],
        default: []
    }
});
