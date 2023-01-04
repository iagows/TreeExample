import 'reflect-metadata'
import { jsonProperty, Serializable } from 'ts-serializable'

export default class HasId extends Serializable {
  @jsonProperty(String)
  public id!: string

  @jsonProperty(String)
  public name!: string
}
