import 'reflect-metadata'

import HasIdDTO from '@iagows/basic-data/HasIdDTO'
import { jsonProperty } from 'ts-serializable'

export default class CarPartsDTO extends HasIdDTO {
  @jsonProperty(String)
  public amount!: number
}
