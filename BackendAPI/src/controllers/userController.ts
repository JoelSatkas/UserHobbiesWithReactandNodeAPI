import * as mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';
import {NextFunction, Request, Response} from 'express';

const User = mongoose.model('User', UserSchema);
export class UserController {

    public addNewUser(req: Request, res: Response) {
        let newUser = new User(req.body);
        newUser.save((err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }

    public getUsers(req: Request, res: Response) {
        User.find({}, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public getUserWithID (req: Request, res: Response) {
        User.findById(req.params.userId, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public updateUser (req: Request, res: Response) {
        User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public deleteUser (req: Request, res: Response) {
        User.remove({ _id: req.params.userId }, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted user!'});
        });
    }

    public getUserWithIDForHobby (req: Request, res: Response, next: NextFunction) {
        User.findById(req.params.userId, (err, user) => {
            if(err){
                res.send(err);
            }
            res.locals.user = user;
            next();
        });
    }

    public updateHobbyForUser (req: Request, res: Response) {
        let user = res.locals.user;
        user.hobbies.push(res.locals.hobbyId);
        User.findOneAndUpdate({ _id: user._id }, user, { new: true }, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(res.locals.hobby);
        });
    }

    public deleteHobbyForUser (req: Request, res: Response) {
        let user = res.locals.user;
        user.hobbies = user.hobbies.filter(hobbyId => hobbyId !== res.locals.hobbyId);
        User.findOneAndUpdate({ _id: user._id }, user, { new: true }, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json("Hobby successfully deleted");
        });
    }
}
