import * as mongoose from 'mongoose';
import {HobbySchema} from './HobbyModel'

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a first name'
    },
    hobbies: {
        type: [HobbySchema]
    }
});
