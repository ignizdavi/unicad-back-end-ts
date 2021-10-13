import { Request, Response, NextFunction } from 'express';
import { ClientLogic } from '../logic';
import { ClientDTO } from '../dtos';
import { Container, Service } from 'typedi';

@Service()
export class ClientsController {
  private logic: ClientLogic;

  constructor() {
    this.logic = Container.get(ClientLogic);
  }

  async getClients(req: Request, res: Response, next: NextFunction) {
    try {
      const response: ClientDTO[] = await this.logic.getClients();
      return res.status(response ? 200 : 204).json(response);
    } catch (error) {
      return next(error);
    }
  }

  async getClient(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const response: ClientDTO = await this.logic.getClient(id);
      return res.status(response ? 200 : 204).json(response);
    } catch (error) {
      return next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.logic.create(req.body);
      return res.status(response ? 201 : 417).json(response);
    } catch (error) {
      return next(error);
    }
  }
}
