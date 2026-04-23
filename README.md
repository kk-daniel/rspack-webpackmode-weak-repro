# Rspack `webpackMode: "weak"` repro

- [Rspack website](https://rspack.dev/)
- [Rspack repo](https://github.com/web-infra-dev/rspack)

This repo reproduces a difference between webpack and Rspack for dynamic imports
with `webpackMode: "weak"`.

```js
import(/* webpackMode: "weak" */ "./weak-dependency.js")
```

Expected behavior: the weak import should not emit a normal async chunk-loader
request. It should only resolve if the module is already available.

Observed behavior: Rspack emits `__webpack_require__.e(...)` for the weak import,
while webpack does not.

## Reproduce

```sh
pnpm install
pnpm run build:rspack
```

Then open `rspack-dist/index.html` in a browser with the network panel open.

Observed Rspack output:

```text
rspack-dist/main.js contains __webpack_require__.e(...)
rspack-dist/src_weak-dependency_js.js is requested by the weak import
```

For comparison:

```sh
pnpm run build:webpack
```

webpack does not emit the same normal async chunk-loader request for the weak
import.
