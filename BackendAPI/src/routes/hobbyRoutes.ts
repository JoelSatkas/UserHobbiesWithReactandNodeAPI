import {Request, Response} from "express";

export class HobbyRoutes {
    public routes(app): void {

        // User Hobby
        app.route('/hobbies/:userId')
            .get((req: Request, res: Response) => {
                // get specific Users Hobbies
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            })
            .post((req: Request, res: Response) => {
                // get specific Users Hobby
                res.status(200).send({
                    message: 'POST request successfulll!!!!'
                })
            })
            .put((req: Request, res: Response) => {
                // Update a Users Hobby
                res.status(200).send({
                    message: 'PUT request successfulll!!!!'
                })
            })
            .delete((req: Request, res: Response) => {
                // Delete a Users Hobby
                res.status(200).send({
                    message: 'DELETE request successfulll!!!!'
                })
            });
    }
}
