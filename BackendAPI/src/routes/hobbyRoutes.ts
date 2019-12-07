import {HobbyController} from "../controllers/hobbyController"
import {UserController} from "../controllers/userController";

export class HobbyRoutes {

    public userController: UserController;
    public hobbyController: HobbyController;

    constructor(userController: UserController, hobbyController: HobbyController) {
        this.userController = userController;
        this.hobbyController = hobbyController;
    }

    public routes(app): void {

        // User Hobby
        app.route('/hobbies/:userId')
            .get(this.userController.getUserWithIDForHobby, this.hobbyController.getHobbies)
            //1. Find User, 2. Create hobby, 3. Updated user with new hobby
            .post(this.userController.getUserWithIDForHobby, this.hobbyController.addNewHobby, this.userController.updateHobbyForUser)
            .delete(this.userController.getUserWithIDForHobby, this.hobbyController.deleteHobby, this.userController.deleteHobbyForUser);

        app.route('/hobbies/:hobbyId')
            .put(this.hobbyController.updateHobby)
    }
}
