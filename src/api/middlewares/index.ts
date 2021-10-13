import { Express } from 'express';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as cors from 'cors';
import { ErrorHandlerMiddleware } from './error-handler';
import * as passport from 'passport';
export class AppMiddlewares {
  static loadMiddlewares(app: Express) {
    app.use(
      cors({
        origin: '*',
        exposedHeaders: ['content-type', 'content-length'],
        maxAge: 600,
        methods: ['GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS'],
        allowedHeaders: [
          'Accept',
          'Content-Type',
          'Authorization',
          'x-api-key',
        ],
      }),
    );

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(helmet());
    app.use(passport.initialize());
    app.use(ErrorHandlerMiddleware.get().handler);
  }
}
