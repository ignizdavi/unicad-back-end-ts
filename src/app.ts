import { AppMiddlewares } from "./api/middlewares";
import { AppRouters, PassportLoader } from "./config";
import * as express from "express";
import { Express } from "express";

export default class App {
    static build() {
        const app: Express = express();
        AppMiddlewares.loadMiddlewares(app);
        AppRouters.load(app);
        PassportLoader.load();
        AppRouters.handleError(app);

        return app;
    }
}