import * as express from "express";
import * as bodyParser from "body-parser";
import { UserRoutes } from "./routes/userRoutes";
import { HobbyRoutes } from "./routes/hobbyRoutes";

class App {
    public app: express.Application;
    public userRoutes: UserRoutes = new UserRoutes();
    public hobbyRoutes: HobbyRoutes = new HobbyRoutes();

    constructor() {
        this.app = express();
        this.config();
        this.userRoutes.routes(this.app);
        this.hobbyRoutes.routes(this.app);
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;
