// eslint-disable-next-line max-classes-per-file
import * as Joi from 'joi';
import { SchemaValidator } from '../validations';

const clientSchema = Joi.object({
  cpf: Joi.string().required(),
  fullName: Joi.string().required(),
  addressesStart: Joi.string().required(),
  numAddressesStart: Joi.number(),
  addressesFinal: Joi.string().required(),
  numAddressesFinal: Joi.number(),
}).meta({ className: 'ClientModel' });

export class GetClientValidator {
  private static params = Joi.object({
    id: Joi.string().required(),
  });

  static get(): SchemaValidator {
    return {
      params: this.params,
    };
  }
}

export class CreateClientValidator {
  private static body = clientSchema;

  static post(): SchemaValidator {
    return {
      body: this.body,
    };
  }
}
