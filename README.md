<p align="center">

  <a href="https://wix.github.com/wix-style-react">
      <img src="https://raw.githubusercontent.com/wix/wix-style-react/master/.storybook/logo.svg?sanitize=true" alt="Wix Style React" width="400">
  </a>
  </br>
<span>
A collection of React components that conform to Wix Style.
</span>

</p>

<div align="center">

![](https://flat.badgen.net/badge/React/16.8.3/blue)
[![](https://badgen.net/npm/v/wix-style-react/latest)](https://www.npmjs.com/package/wix-style-react)
[![Dependencies](https://img.shields.io/david/wix/wix-style-react.svg?style=flat-square)](https://david-dm.org/wix/wix-style-react)
[![DevDependencies](https://img.shields.io/david/dev/ant-design/ant-design.svg?style=flat-square)](https://david-dm.org/wix/wix-style-react?type=dev)

</div>

<div align="center">
 <a href="https://wix-style-react.now.sh">https://wix-style-react.now.sh/</a>
</div>

## 📦 Install

```bash
npm install wix-style-react
```

```bash
yarn add wix-style-react
```

## 🔨 Setup

If 🐉yoshi build runner is used for your application then all required loaders are already defined. If you'd rather set up your project manually, take a look at our [webpack guide](https://github.com/wix/wix-style-react/blob/master/docs/usage-without-yoshi.md).

Minimal Yoshi version to be used with wix-style-react:

`Version 4 - ^4.1.0`

`Version 3 - ^3.31.2`

Load Wix fonts from CDN:
  ```html
  <link
    rel="stylesheet"
    href="//static.parastorage.com/services/third-party/fonts/Helvetica/fontFace.css"
  />
  ```
Enable font smoothing with browser specific css properties:
  ```css
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ```

Make sure that react and react-dom versions are not higher then:
  ```html
    //package.json
   .
   .
   "react":"16.8.3",
   "react-dom":"16.8.3"
   .
   .

  ```

**Migrating wix-style-react from older versions**:

- From 7.x to 8.x read [V8 migration guide](TODO-WSR8-fix-links)
- From 6.x to 7.x read [V7 migration guide](TODO-WSR8-fix-links)

**Older version Storybook:**

- [V7 Storybook](https://wix-style-react-v7.now.sh)
- [V6 Storybook](https://wix-wix-style-react-v6.surge.sh/)

## 🚀 Usage

```jsx
import { Button } from 'wix-style-react';

const App = () => (
  <Button>
    Click me!
  </Button>
);
```

## 💫 Testkits

All our components are provided with testkits that help our users test them.

A component testkit provides an interface to the component, enabling automated tests to access component functions without needing to know precise details of the technology being used.

```jsx
//  Here is an example

// 1. import
import { inputTestkitFactory } from 'wix-style-react/dist/testkit';

// 2. initialize
const inputDriver = inputTestkitFactory({
  wrapper: document.body,
  dataHook: 'name-input',
});

// 3. interact
it('test', async () => {
    await inputDriver.enterText('hello world');
    expect(await inputDriver.getText()).toBe('hello world');
});
```
All methods are documented in our storybook components stories and some can be viewed through typescript interface.

Our testkits currently support four major testing frameworks: `react-jsdom`, `protractor`, `puppeteer` and `selenium`. Read our [testing guidelines](https://github.com/wix/wix-style-react/blob/master/docs/usage/testing.md)

## ⌨️ Typescript

The library is javascript based but types are supported with `d.ts` files.
You should get the types automatically when installing `wix-style-react`.
For any issues, check out our types [FAQ](https://github.com/wix/wix-style-react/blob/master/docs/FAQ/TYPES.MD)

## 🤝 Contributing [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

We welcome contributions to Wix-Style-React!

Read our [contributing guide](./CONTRIBUTING.md) and help us build or improve our components.

## 📝 License

This project is offered under [MIT License](https://github.com/wix/wix-style-react/blob/master/LICENSE).
