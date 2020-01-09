TypeScript Throw Error as Fallback Demo
=======================================

如何在`??`的fallback value处throw error

注意：throwError的返回值类型为`never`，非常重要，将不会因为它而改变变量期待的真正类型

See: <https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing>

```
aaa ?? 'bbb'
```

```
npm install
npm run demo
```
