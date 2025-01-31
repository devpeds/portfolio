type Nullable<T> = T | null | undefined

export function letIf<T, U>(
  value: Nullable<T>,
  callback: (v: T) => U,
): U | undefined {
  return value !== null && value !== undefined ? callback(value) : undefined
}

export function letIfTruthy<T, U>(
  value: Nullable<T>,
  callback: (v: T) => U,
): U | undefined {
  return value ? callback(value) : undefined
}
