import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    _id: {
        type: String
    },
    name: {
        type: String
    },
    hobbies: {
        type: [String]
    }
});
