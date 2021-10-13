import { Express } from 'express';
import App from './app';
import { DatabaseConfig } from './config';
import { Server } from './server';

class Bootstrap {
    static async main() {
        const app: Express = App.build()
        DatabaseConfig.connect();
        Server.init(app);
    }
}

Bootstrap.main();
