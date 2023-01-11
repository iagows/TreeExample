import 'reflect-metadata'

import HasIdDTO from '@iagows/basic-data/src/HasIdDTO'
import { jsonProperty } from 'ts-serializable'

export default class CarDTO extends HasIdDTO {
  @jsonProperty(String)
  public plate!: string
}
