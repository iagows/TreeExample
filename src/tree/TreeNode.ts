import { HasId } from '../model/HasId'

export class TreeNode {
  public parentId?: string
  public children: TreeNode[]
  public data: HasId

  constructor(data: HasId, children: TreeNode[] = [], parentId?: string) {
    this.data = data
    this.parentId = parentId
    this.children = children
  }

  public addChildren(child: TreeNode, position = 0) {
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
    return -1 // conta pai, avô, bisavô...
  }
}
