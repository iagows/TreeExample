export type Left<T> = {
  left: T
  right?: never
}

export type Right<U> = {
  left?: never
  right: U
}

export type Either<T, U> = NonNullable<Left<T> | Right<U>>

type UnwrapEither = <T, U>(e: Either<T, U>) => NonNullable<T | U>

export const unwrapEither: UnwrapEither = <T, U>({
  left,
  right
}: Either<T, U>): NonNullable<T | U> => {
  if (right !== undefined && left !== undefined) {
    throw new Error(
      `Received both left and right values at runtime when opening an Either\nLeft: ${JSON.stringify(
        left
      )}\nRight: ${JSON.stringify(right)}`
    )
  }

  if (left !== undefined) {
    return left as NonNullable<T>
  }

  if (right !== undefined) {
    return right as NonNullable<U>
  }

  throw new Error(
    `Received no left or right values at runtime when opening Either`
  )
}

export const isLeft = <T, U>(e: Either<T, U>): e is Left<T> => {
  return e.left !== undefined
}

export const isRight = <T, U>(e: Either<T, U>): e is Right<U> => {
  return e.right !== undefined
}

export function makeLeft<T>(value: T): Left<T> {
  return { left: value }
}

export function makeRight<U>(value: U): Right<U> {
  return { right: value }
}

export type CustomError = string

export type Predicate<N> = (val: N) => boolean

export function predicateEither<A, B>(
  value: B,
  error: A,
  predicate: Predicate<B>
): Either<A, B> {
  if (!predicate(value)) return makeLeft(error)
  return makeRight(value)
}

type Pair<A, B> = {
  first: A
  second: B
}

export function firstLeft<A, B>(
  val: B,
  predicatePairs: Pair<Predicate<B>, A>[]
): Either<A, B> {
  for (let i = 0; i < predicatePairs.length; i++) {
    const p = predicatePairs[i].first
    const e = predicatePairs[i].second
    if (!p(val)) return makeLeft(e)
  }
  return makeRight(val)
}
