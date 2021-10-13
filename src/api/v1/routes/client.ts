import { Router, Request, Response, NextFunction } from 'express';
import Container from 'typedi';
import { ClientsController } from '../controllers';
import { GetClientValidator, CreateClientValidator } from './schemas';
import { RouteValidator } from './validations';

const controller = Container.get(ClientsController);

const router = Router();

router
  .route('/clients/:id')
  .get(
    RouteValidator.validate(GetClientValidator.get()),
    (req: Request, res: Response, next: NextFunction) =>
      controller.getClient(req, res, next),
  );

router
  .route('/clients$')
  .post(
    RouteValidator.validate(CreateClientValidator.post()),
    (req: Request, res: Response, next: NextFunction) =>
      controller.create(req, res, next),
  )
  .get((req: Request, res: Response, next: NextFunction) =>
    controller.getClients(req, res, next),
  );

export { router as ClientRouter };
