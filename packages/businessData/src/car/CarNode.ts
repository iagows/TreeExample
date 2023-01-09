import { carTypeMap, CarTypes } from './CarTypes'

import HasIdDTO from '@iagows/basic-data/HasIdDTO'
import TreeNode from '@iagows/data-structure/tree/TreeNode'

export class CarNode extends TreeNode {
  protected _carType: CarTypes
  private allowedChildrenTypes: CarTypes[]

  private constructor(
    carType: CarTypes,
    data: HasIdDTO,
    allowedChildrenTypes: CarTypes[] = []
  ) {
    super(data)
    this._carType = carType
    this.allowedChildrenTypes = allowedChildrenTypes
  }

  public static create(carType: CarTypes, data: HasIdDTO): CarNode {
    return new CarNode(carType, data, carTypeMap(carType))
  }

  public canAddChild(child: CarNode): boolean {
    return this.allowedChildrenTypes.some((t) => child.carType === t)
  }

  public addChild(child: CarNode, position = 0) {
    if (this.canAddChild(child)) {
      super.addChild(child, position)
    } else {
      throw new Error(`You can't add a ${child.constructor.name} as a child`)
    }
  }

  public get carType(): CarTypes {
    return this._carType
  }
}
