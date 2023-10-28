declare module 'sort-by' {
 export function sortBy<T>(...args: string[]): (a: T, b: T) => number;
}