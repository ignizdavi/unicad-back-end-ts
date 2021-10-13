export interface InterfaceClient {
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
