import { HealhtChecker } from './health-check-routers';
import { ClientRouter } from './client';
import { Router } from 'express';

const v1 = Router();
v1.use(HealhtChecker);
v1.use(ClientRouter);

export { v1 };
