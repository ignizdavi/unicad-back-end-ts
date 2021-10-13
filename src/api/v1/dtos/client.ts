import { InterfaceClient } from '../interfaces';

export interface ClientDTO {
  _id?: string;
  cpf: string;
  fullName: string;
  addressesStart: string;
  numAddressesStart?: number;
  addressesFinal: string;
  numAddressesFinal?: number;
  createdAt: Date;
  updatedAt: Date;
}

export class ClientClass {
  static buildClientDTO(model: InterfaceClient): ClientDTO {
    const dto = {
      _id: model._id,
      cpf: model.cpf,
      fullName: model.fullName,
      addressesStart: model.addressesStart,
      numAddressesStart: model.numAddressesStart,
      addressesFinal: model.addressesFinal,
      numAddressesFinal: model.numAddressesFinal,
      createdAt: model.createdAt,
      updatedAt: model.updatedAt,
    } as ClientDTO;

    return dto;
  }

  static buildInterfaceClientModel(dto: ClientDTO): InterfaceClient {
    const model = {
      cpf: dto.cpf,
      fullName: dto.fullName,
      addressesStart: dto.addressesStart,
      numAddressesStart: dto.numAddressesStart,
      addressesFinal: dto.addressesFinal,
      numAddressesFinal: dto.numAddressesFinal,
      createdAt: dto.createdAt,
      updatedAt: dto.updatedAt,
    } as InterfaceClient;

    return model;
  }
}
