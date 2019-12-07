import * as mongoose from 'mongoose';
import { HobbySchema } from '../models/hobbyModel';
import {NextFunction, Request, Response} from 'express';

const Hobby = mongoose.model('Hobby', HobbySchema);

export class HobbyController {
    public addNewHobby(req: Request, res: Response, next: NextFunction) {
        let newHobby = new Hobby(req.body);
        newHobby.save((hobbyError, hobby) => {
            if (hobbyError) {
                res.send(hobbyError);
            }
            res.locals.hobbyId = hobby._id;
            next();
        });
    }

    public getHobbies(req: Request, res: Response) {
        Hobby.find({}, (err, hobby) => {
            if(err){
                res.send(err);
            }
            res.json(hobby);
        });
    }

    public updateHobby (req: Request, res: Response) {
        Hobby.findOneAndUpdate({ _id: req.params.hobbyId }, req.body, { new: true }, (err, hobby) => {
            if(err){
                res.send(err);
            }
            res.json(hobby);
        });
    }

    public deleteHobby (req: Request, res: Response, next: NextFunction) {
        Hobby.remove({ _id: req.params.hobbyId }, (err, hobby) => {
            if(err){
                res.send(err);
            }
            res.locals.hobbyId = hobby._id;
            next();
        });
    }
}