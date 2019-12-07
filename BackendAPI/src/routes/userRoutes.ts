import {Request, Response} from "express";

export class UserRoutes {
    public routes(app): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            });

        // User
        app.route('/user')
        // GET endpoint
            .get((req: Request, res: Response) => {
                // Get all Users
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            })
            // POST endpoint
            .post((req: Request, res: Response) => {
                // Create new User
                res.status(200).send({
                    message: 'POST request successfulll!!!!'
                })
            });

        // User detail
        app.route('/user/:userId')
        // get specific User
            .get((req: Request, res: Response) => {
                // Get a single User detail
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            })
            .put((req: Request, res: Response) => {
                // Update a User
                res.status(200).send({
                    message: 'PUT request successfulll!!!!'
                })
            })
            .delete((req: Request, res: Response) => {
                // Delete a User
                res.status(200).send({
                    message: 'DELETE request successfulll!!!!'
                })
            });
    }
}
