import { ClientDTO } from '../dtos';
import { InterfaceClient } from '../interfaces';
import { ClientModel } from '../models';

export class ClientRepository {
  public async create(client: ClientDTO): Promise<InterfaceClient> {
    try {
      const result = await ClientModel.create(client);
      return result;
    } catch (err) {
      throw err;
    }
  }

  public async getClient(_id: string): Promise<InterfaceClient> {
    try {
      const model = await ClientModel.findOne({ _id });

      return model;
    } catch (err) {
      throw err;
    }
  }

  public async getClients(): Promise<InterfaceClient[]> {
    try {
      const result = await ClientModel.find();

      return result;
    } catch (error) {
      throw error;
    }
  }
}
