import { ClientRepository } from '../repositories';
import { ClientClass, ClientDTO } from '../dtos';
import { Container } from 'typedi';
import { InterfaceClient } from '../interfaces';
export class ClientLogic {
  private repository: ClientRepository;

  constructor() {
    this.repository = Container.get(ClientRepository);
  }

  async getClient(id: string): Promise<ClientDTO> {
    try {
      const response: InterfaceClient = await this.repository.getClient(id);
      if (!response) {
        throw new Error('Client does not found');
      }
      return ClientClass.buildClientDTO(response);
    } catch (error) {
      throw error;
    }
  }

  async getClients(): Promise<ClientDTO[]> {
    try {
      const categories = await this.repository.getClients();
      const response: Array<ClientDTO> = categories.map((o) =>
        ClientClass.buildClientDTO(o),
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  async create(dto: ClientDTO): Promise<ClientDTO> {
    try {
      dto = { ...dto, createdAt: new Date(), updatedAt: new Date() };
      const response: InterfaceClient = await this.repository.create(dto);
      if (!response) {
        throw new Error(`Couldn't create client. ${response}`);
      }
      return ClientClass.buildClientDTO(response);
    } catch (error) {
      throw error;
    }
  }
}
