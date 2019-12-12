## UserHobbiesWithReactandNodeAPI
## Available Scripts

In the project directory, you can run:

### `npm run dev-server`

Runs the api in the development mode.<br />
Use [http://localhost:3001](http://localhost:3001) to connect to it.

### `npm run test-server`

Runs Jest tests for the API

## Docs

Use [http://localhost:3001/api-docs/](http://localhost:3001/api-docs/) to view the swagger API docs.

## Notes:

* The api presumes mongoDB is running locally, its url can be changed in app.ts
* API port is defined in server.ts
* I also started developing the frontend but ran out of time so its unfinished but if MongoDB has users and
hobbies then they will display in the app. It can also create new users but not hobbies.
* You can use Postman to query the API and insert data into MongoDb at which point the front end will be able 
to display the users and their hobbies.
