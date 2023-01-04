import 'reflect-metadata'

import HasId from './HasId'
import { jsonProperty } from 'ts-serializable'

export default class CarPartsDTO extends HasId {
  @jsonProperty(String)
  public amount!: number
}
