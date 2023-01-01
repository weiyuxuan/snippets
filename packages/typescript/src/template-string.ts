type Version = `${number}.${number}.${number}`;
const v1: Version = '1.1.0';

type Brand = 'iphone' | 'xiaomi' | 'honor';
type Memory = '16G' | '64G';
type ItemType = 'official' | 'second-hand';
type SKU = `${Brand}-${Memory}-${ItemType}`;

type SizeRecord<Size extends string> = `${Size}-Record`;
type Size = 'Small' | 'Middle' | 'Large';
type UnionSizeRecord = SizeRecord<Size>;

interface Foo {
  name: string;
  age: number;
  sexual: boolean;
}
type ChangeListener = {
  on: (change: `${keyof Foo}Changed`) => void;
};
declare let listener: ChangeListener;
// "nameChanged" | "ageChanged" | "sexualChanged"
listener.on('nameChanged');

type CopyWithRename<T extends object> = {
  [K in keyof T as `modified_${string & K}`]: T[K];
};

type Heavy<T extends string> = `${Uppercase<T>}`;
type Light<T extends string> = `${Lowercase<T>}`;
type Respect<T extends string> = `${Capitalize<T>}`;
type Ignore<T extends string> = `${Uncapitalize<T>}`;

type ReverseName<Str extends string> =
  Str extends `${infer First} ${infer Last}`
    ? `${Capitalize<Last>} ${First}`
    : Str;

declare function handler<Str extends string>(arg: `Guess who is ${Str}`): Str;
