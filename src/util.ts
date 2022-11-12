export const entries = <K extends keyof any, V extends unknown>(obj: { readonly [k in K]?: V }): [K, V][] => Object.entries(obj) as any
