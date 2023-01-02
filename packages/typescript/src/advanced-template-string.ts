export type Include<Str extends string, Search extends string> =
  Str extends ''
    ? Search extends '' ? true : false
    : Str extends `${infer _R1}${Search}${infer _R2}` ? true : false;

export type TrimLeft<Str extends string> = Str extends ` ${infer R}` ? TrimLeft<R> : Str;

export type TrimRight<Str extends string> = Str extends `${infer R} ` ? TrimRight<R> : Str;

export type Trim<Str extends string> = TrimLeft<TrimRight<Str>>;

export type _StartsWith<Str extends string, Search extends string> =
  Str extends `${Search}${infer _R}` ? true : false;

export type StartsWith<Str extends string, Search extends string> =
  Str extends ''
    ? Search extends '' ? true : _StartsWith<Str, Search>
    : _StartsWith<Str, Search>;

export type Replace<
  Str extends string,
  Search extends string,
  Replacement extends string
> = Str extends `${infer Head}${Search}${infer Tail}`
  ? `${Head}${Replacement}${Tail}`
  : Str;

export type ReplaceAll<
  Str extends string,
  Search extends string,
  Replacement extends string
> = Str extends `${infer Head}${Search}${infer Tail}`
  ? ReplaceAll<`${Head}${Replacement}${Tail}`, Search, Replacement>
  : Str;

export type Split<
  Str extends string,
  Delimiter extends string
> = Str extends `${infer Head}${Delimiter}${infer Tail}`
  ? [Head, ...Split<Tail, Delimiter>]
  : Str extends Delimiter ? [] : [Str];

export type Join<
  List extends Array<string | number>,
  Delimiter extends string
> = List extends []
  ? ''
  : List extends [string | number]
    ? `${List[0]}`
    : List extends [string | number, ...infer Rest]
      ? // @ts-expect-error - TS doesn't like the recursive type
        `${List[0]}${Delimiter}${Join<Rest, Delimiter>}`
      : string;

export type SnakeCase2CamelCase<S extends string> =
  S extends `${infer Head}${'_'}${infer Rest}`
    ? `${Head}${SnakeCase2CamelCase<Capitalize<Rest>>}`
    : S;

export type DelimiterCase2CamelCase<
  S extends string,
  Delimiter extends string
> = S extends `${infer Head}${Delimiter}${infer Rest}`
  ? `${Head}${DelimiterCase2CamelCase<Capitalize<Rest>, Delimiter>}`
  : S;

export {};
