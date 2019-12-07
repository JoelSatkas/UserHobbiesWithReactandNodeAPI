import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import { UserRoutes } from "./routes/userRoutes";
import { HobbyRoutes } from "./routes/hobbyRoutes";
import {UserController} from "./controllers/userController";
import {HobbyController} from "./controllers/hobbyController";

class App {
    public app: express.Application;
    public mongoUrl: string = 'mongodb://localhost/Hobbydb';
    public userController: UserController = new UserController();
    public hobbyController: HobbyController = new HobbyController();
    public userRoutes: UserRoutes = new UserRoutes(this.userController);
    public hobbyRoutes: HobbyRoutes = new HobbyRoutes(this.userController, this.hobbyController);

    constructor() {
        this.app = express();
        this.config();
        this.userRoutes.routes(this.app);
        this.hobbyRoutes.routes(this.app);
        this.mongoSetup();
        // this.insertTestData();
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true});
    }

    private insertTestData() {

    }
}

export default new App().app;
