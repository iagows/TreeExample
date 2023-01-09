import 'reflect-metadata'

import HasIdDTO from '@iagows/basic-data/HasIdDTO'
import { jsonProperty } from 'ts-serializable'

export default class BodyDTO extends HasIdDTO {
  @jsonProperty(String)
  public body!: string
}
