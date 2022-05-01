<h1 align="center">Webpack Config</h1>

<h2 align="center">

![](https://img.shields.io/github/languages/count/Alekanteri/webpack-config)
![](https://img.shields.io/github/languages/top/Alekanteri/webpack-config)
![](https://img.shields.io/github/followers/Alekanteri?style=social)

</h2>

<h3>

This is my personal build of webpack, which will be improved as much as possible in the future.

</h3>

## Scripts

### `yarn dev`

```json
"DEV=true webpack serve --open"
```

Open local server in development mode. Webpack listens for file changes and changes the content on the page automatically.

### `yarn watch`

```json
"webpack --watch"
```

Needed to rebuild files without starting a local server

### `yarn build`

```json
"NODE_ENV=production webpack"
```

Creates a _./dist_ folder with final minified files