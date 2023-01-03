// Declarations are used to declare the types of variables, functions, classes, etc.

declare let handler: (input: string) => boolean;

interface Foo {
    name: string;
    age: number;
}

declare const foo: Foo;

declare class FooCls {
  prop: string;
}

// According to the extra type declaration files,
// we can complete the types outside the core business codes.

declare module 'js-pkg' {
  const handler: () => boolean;
}

declare module '*.md' {
  const raw: string;
  export default raw;
}

declare module '*.module.css' {
  const classes: CSSModuleClasses;
  export default classes;
}

declare let window: Window & typeof globalThis;

// Namespace is just like a module or a file, it can be used to group related types.

declare namespace Animal {
  export interface Dog {
    name: string;
  }
  export namespace ProtectedAnimals {}
}

declare global {
  namespace JSX {
    type Element = React.ReactElement<any, any>
  }
}

export {};
