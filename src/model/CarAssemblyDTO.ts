import 'reflect-metadata'

import HasId from './HasId'
import { jsonProperty } from 'ts-serializable'

export default class CarAssemblyDTO extends HasId {
  @jsonProperty(String)
  public serial!: string
}
