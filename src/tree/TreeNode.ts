import HasId from '../model/HasId'

export default class TreeNode {
  protected _data: HasId
  protected _parent?: TreeNode
  protected _children: TreeNode[] = []

  constructor(data: HasId, parent?: TreeNode) {
    this._data = data
    this._parent = parent
  }

  public addChild(child: TreeNode, position = 0) {
    this.children.splice(position, 0, child)
  }

  public removeChildren(id: string) {
    // recursive
  }

  public searchVertical(id: string): TreeNode | undefined {
    return undefined
  }

  public searchHorizontal(id: string): TreeNode | undefined {
    return undefined
  }

  public get isLeaf(): boolean {
    return this.children.length === 0
  }

  public isBranch(): boolean {
    return !this.isLeaf
  }

  public get isRoot(): boolean {
    return this.level === 0
  }

  public get level(): number {
    const counter = 1
    return counter + (this.parent ? this.parent.level : 0)
  }

  get children(): TreeNode[] {
    return this._children
  }

  get parent(): TreeNode | undefined {
    return this._parent
  }

  get data(): HasId {
    return this._data
  }
}
