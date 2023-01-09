import 'reflect-metadata'

import HasIdDTO from '@iagows/basic-data/HasIdDTO'
import { jsonProperty } from 'ts-serializable'

export default class CarAssemblyDTO extends HasIdDTO {
  @jsonProperty(String)
  public serial!: string
}
