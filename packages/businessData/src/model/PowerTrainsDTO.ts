import 'reflect-metadata'

import HasIdDTO from '@iagows/basic-data/src/HasIdDTO'
import { jsonProperty } from 'ts-serializable'

export default class PowerTrainsDTO extends HasIdDTO {
  @jsonProperty(String)
  public pt!: string
}
