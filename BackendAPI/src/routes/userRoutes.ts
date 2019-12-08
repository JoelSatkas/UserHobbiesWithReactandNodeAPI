import {Request, Response} from "express";
import {UserController} from "../controllers/userController";
const { GETUserValidationRules, POSTUserValidationRules, PUTUserValidationRules, DELETEUserValidationRules, validateUser, } = require('../validators/userValidators/userValidation');

export class UserRoutes {
    public userController: UserController;

    constructor(userController: UserController) {
        this.userController = userController;
    }

    public routes(app): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successful'
                })
            });

        // User
        app.route('/user')
            // GET endpoint
            .get(GETUserValidationRules(), validateUser, this.userController.getUsers)
            // POST endpoint
            .post(POSTUserValidationRules(), validateUser, this.userController.addNewUser);

        // User detail
        app.route('/user/:userId')
            // get specific User
            .get(this.userController.getUserWithID)
            .put(PUTUserValidationRules(), validateUser, this.userController.updateUser)
            .delete(DELETEUserValidationRules(), validateUser, this.userController.deleteUser);
    }
}
