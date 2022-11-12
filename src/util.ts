/** `Object.entries` with a narrower type. */
export const entries = <K extends keyof any, V extends unknown>(obj: { readonly [k in K]?: V }): [K, V][] => Object.entries(obj) as any

/** https://en.wikipedia.org/wiki/Smoothstep */
export const smoothstep = (a: number, b: number, x: number) => x < a ? 0 : x > b ? 1 : (x - a) / (b - a)
