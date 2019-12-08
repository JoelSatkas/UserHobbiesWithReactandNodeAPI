import {HobbyController} from "../controllers/hobbyController"
import {UserController} from "../controllers/userController";
const {GETHobbyValidationRules, POSTHobbyValidationRules, PUTHobbyValidationRules, DELETEHobbyValidationRules, validateHobby,} = require("../validators/hobbyValidators/hobbyValidation");

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
            .get(GETHobbyValidationRules(), validateHobby, this.userController.getUserWithIDForHobby, this.hobbyController.getHobbies)
            //1. Find User, 2. Create hobby, 3. Updated user with new hobby
            .post(POSTHobbyValidationRules(), validateHobby, this.userController.getUserWithIDForHobby, this.hobbyController.addNewHobby, this.userController.updateHobbyForUser)
            .delete(DELETEHobbyValidationRules(), validateHobby, this.userController.getUserWithIDForHobby, this.hobbyController.deleteHobby, this.userController.deleteHobbyForUser);

        app.route('/hobbies/:hobbyId')
            .put(PUTHobbyValidationRules(), validateHobby, this.hobbyController.updateHobby)
    }
}
