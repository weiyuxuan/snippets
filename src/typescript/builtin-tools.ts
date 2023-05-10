// Property Tools

export type Partial<T> = {
  [P in keyof T]?: T[P];
};

export type Required<T> = {
  [P in keyof T]-?: T[P];
};

export type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

export type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

// Union Tools

export type Concurrence<A, B> = A | B;

export type Exclude<T, U> = T extends U ? never : T;

export type Extract<T, U> = T extends U ? T : never;

export type Complement<T, U extends T> = Exclude<T, U>;

export type Nullable<T> = T | null;

export type NonNullable<T> = T extends null | undefined ? never : T;

// Structure Tools

export type Record<K extends keyof any, T> = {
  [P in K]: T;
};

export type Dictionary<T> = {
  [index: string]: T;
};

export type NumericDictionary<T> = {
  [index: number]: T;
};

export type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

export type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

// Pattern Matching Tools

export type FunctionType = (...args: any) => any;

export type Parameters<T extends FunctionType> = T extends (...args: infer P) => any ? P : never;

export type ReturnType<T extends FunctionType> = T extends (...args: any) => infer R ? R : any;

export type ClassType = abstract new (...args: any) => any;

export type ConstructorParameters<T extends ClassType> = T extends abstract new (
  ...args: infer P
) => any
  ? P
  : never;

export type InstanceType<T extends ClassType> = T extends abstract new (
  ...args: any
) => infer R
  ? R
  : any;

export {};
