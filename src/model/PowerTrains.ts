import 'reflect-metadata'

import HasId from './HasId'
import { jsonProperty } from 'ts-serializable'

export default class PowerTrainsDTO extends HasId {
  @jsonProperty(String)
  public pt!: string
}
