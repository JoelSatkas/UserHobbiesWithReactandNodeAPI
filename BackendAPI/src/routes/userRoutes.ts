import {Request, Response} from "express";
import {UserController} from "../controllers/userController"

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
            .get(this.userController.getUsers)
            // POST endpoint
            .post(this.userController.addNewUser);

        // User detail
        app.route('/user/:userId')
            // get specific User
            .get(this.userController.getUserWithID)
            .put(this.userController.updateUser)
            .delete(this.userController.deleteUser);
    }
}
