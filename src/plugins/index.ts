import {INestApplication} from '@nestjs/common';
import setupSwagger from './setupSwagger';
import setupValidate from "./setupValidate";

export default function setupPlguins(app: INestApplication) {
  setupSwagger(app);
  setupValidate(app)
}
