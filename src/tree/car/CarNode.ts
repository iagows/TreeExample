import TreeNode from '../TreeNode'
import HasId from '../../model/HasId'
import { carTypeMap, CarTypes } from './CarTypes'

export class CarNode extends TreeNode {
  protected _carType: CarTypes
  private allowedChildrenTypes: CarTypes[]

  private constructor(
    carType: CarTypes,
    data: HasId,
    allowedChildrenTypes: CarTypes[] = [],
    parent?: TreeNode
  ) {
    super(data, parent)
    this._carType = carType
    this.allowedChildrenTypes = allowedChildrenTypes
  }

  public static create(
    carType: CarTypes,
    data: HasId,
    parent?: TreeNode
  ): CarNode {
    return new CarNode(carType, data, carTypeMap(carType), parent)
  }

  protected canAddChild(child: TreeNode): boolean {
    return this.allowedChildrenTypes.some((t) => this.carType === t)
  }

  public addChild(child: TreeNode, position = 0) {
    if (this.canAddChild(child)) {
      this._children.splice(position, 0, child)
    } else {
      throw new Error(`You can't add a ${child.constructor.name} as a child`)
    }
  }

  public get carType(): CarTypes {
    return this._carType
  }
}
