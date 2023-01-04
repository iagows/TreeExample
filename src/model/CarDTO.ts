import 'reflect-metadata'

import HasId from './HasId'
import { jsonProperty } from 'ts-serializable'

export default class CarDTO extends HasId {
  @jsonProperty(String)
  public plate!: string
}
