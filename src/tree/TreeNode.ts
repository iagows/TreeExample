import HasId from '../model/HasId'

export default class TreeNode {
  protected _data: HasId
  protected _parent?: TreeNode
  protected _children: TreeNode[] = []

  constructor(data: HasId) {
    this._data = data
  }

  public addChild(child: TreeNode, position = 0) {
    child._parent = this
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
    return 1 + (this.parent ? this.parent.level : 0)
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

  toString(): string {
    return `${new Array(this.level).fill('-').join('')} ${
      this.data.name
    }\n${this.children.map((c) => c.toString()).join('')}`
  }
}
