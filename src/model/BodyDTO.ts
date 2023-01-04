import 'reflect-metadata'

import HasId from './HasId'
import { jsonProperty } from 'ts-serializable'

export default class BodyDTO extends HasId {
  @jsonProperty(String)
  public body!: string
}
