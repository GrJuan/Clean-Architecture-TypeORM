# Clean Architecture with Node.js, TypeORM and TypeScript

This is a sample project showcasing how to implement Clean Architecture with Node.js, TypeORM and TypeScript.

## Installation

To install the dependencies, run:

```
npm i
```

## Running the Application

To run the application in development mode, use the following command:

```
npm run dev
```

This will start the application using `ts-node-dev`, which will watch for changes in the TypeScript code and automatically recompile and restart the application.

## Architecture

This project follows the principles of Clean Architecture, which promotes separation of concerns and testability.

The project is organized into the following layers:

- **Presentation**: This layer contains the delivery mechanism for the application, such as controllers and routes. It depends on the `Application` layer.
- **Application**: This layer contains the business logic of the application. It depends on the `Domain` layer.
- **Domain**: This layer contains the core domain logic of the application, such as entities and business rules. It does not depend on any other layer.
- **Infrastructure**: This layer contains the implementation details of the application, such as database access and external APIs. It depends on the `Domain` layer.

## Technologies Used

- Node.js
- TypeScript
- TypeORM

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.