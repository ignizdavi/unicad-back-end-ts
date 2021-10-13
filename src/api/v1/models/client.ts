import * as mongoose from 'mongoose';
import { InterfaceClient } from '../interfaces';
const { Schema } = mongoose;

const ClientSchema = new Schema<InterfaceClient>({
  cpf: { type: Number, required: true, unique: true },
  fullName: { type: String, required: true },
  addressesStart: { type: String, required: true },
  numAddressesStart: { type: Number },
  addressesFinal: { type: String, required: true },
  numAddressesFinal: { type: Number },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

const ClientModel = mongoose.model<InterfaceClient>(
  'Client',
  ClientSchema,
  'clients',
);

export { ClientModel };
