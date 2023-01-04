import HasId from '../../model/HasId'
import TreeNode from '../TreeNode'
import { carTypeMap, CarTypes } from './CarTypes'

export class CarNode extends TreeNode {
  protected _carType: CarTypes
  private allowedChildrenTypes: CarTypes[]

  private constructor(
    carType: CarTypes,
    data: HasId,
    allowedChildrenTypes: CarTypes[] = []
  ) {
    super(data)
    this._carType = carType
    this.allowedChildrenTypes = allowedChildrenTypes
  }

  public static create(carType: CarTypes, data: HasId): CarNode {
    return new CarNode(carType, data, carTypeMap(carType))
  }

  protected canAddChild(child: CarNode): boolean {
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
