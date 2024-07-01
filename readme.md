# This is a basic node js project template, which anyone can use as it has been prepared by keeping some of the most important code practices and project management recommendation.

`src` -> Inside the src folder all the actual source code regarind the project reside, this will not include any kind of tests, (You might want to make separate tests folder)

## Lets take a look inside the `src` folder:

- `config` -> In this folder anything and everything regarding any configurations or setup of a library or a module will be done. For example: setting up `dotenv` so that we can use the environment variable anywhere in a cleaner fashion, this is done in the `server-config.js`. One more example can be setting up the logging library that can helps in preparing meaningful logs.

- `routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it.

- `middlewares` -> They are just going to intercept the incoming requests where we can write out validators, authentications, etc.

- `controllers` -> They are kind of the last middleware as post the callign od business layer to execute the business logic is done. In controllers, only recieving of incoming requests and data and then passing it to business layer happens and once the business layer returns an output then structure the API response and sending the output took place.

- `repositories` -> This folder contains all the logic using which we can interact the DB by writing queries, all the raw queries or ORM queries will go here.

- `services1 -> Contains the business logic and interacts with repositories for data from the database.

- `utils` -> Contains helper methods or small piece of codes that are resuable throughout the code. For example: error class etc.


### Setup the project

- Download this template from github and open it in your favourite toext editor.
- In the root directory create a `.env` file and add the following env variables
    ```
        PORT=<port number of your choice>
    ```
    ex: 
    ```
        PORT=3000
    ```