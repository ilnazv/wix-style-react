# Documenting Components

## Documentation tools
All components are documented and displayed on our main documentation page which is rendered with [Storybook](https://storybook.js.org)

## Documentation layers
There are two layers of documentation in the storybook:
- **Design System indexing**
- **Components APIs**

The storybook is structured accordingly. For example:

```
4. Selection // The category
  4.1 Dropdown // The relevant component by their semantic meaning with common example use cases

Components //APIs
  - Dropdown // The actual component to be used
  - FormField // Another acutal component to be used with Dropdown
```

## Design System indexing
In this section, the structure will be according to the UX definitions of the design system.
It contains common examples and use cases, accompanied by explanation how and when to use the components. It will also contain links to the actual component APIs in the next section.

## Components APIs
For API documentation, we use [wix-storybook-utils](https://github.com/wix/wix-ui/tree/master/packages/wix-storybook-utils) - a tool built to generate documentation automatically (aka AutoStory, AutoDocs).

It is important to scrape APIs, testkit drivers and create interactive playground based on props and some code hints.

[Read here](https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md) how to document components in the library using `wix-storybook-utils`.

### Configuring a component story

Here is a minimal example of an AutoStory configuration:
(file name must have a `.story.js` suffix)
> MyComp.story.js

```js
import MyComp from '../../src/MyComp';
import { storySettings } from './storySettings';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: MyComp,
  componentPath: '../../src/MyComp',
  componentProps: {
    dataHook: storySettings.dataHook,
    value: 'some prop value'
  }
}
```

Every new comoponent requires a component story in the Components API section.
If the UX symbol is a composite of more than 1 component, it also requires a Design Guidelines story.
Example can be found [here] (https://github.com/wix/wix-style-react/blob/master/stories/MultiSelect/index.story.js)

## Cheatsheet

In order to improve the components discoverability and map each UX symbol to the relevant components used, we've created a [Cheatsheet](https://wix-style-react.now.sh/?path=/story/introduction-cheatsheet--components-cheatsheet) with all the components within the library.
[Read here ](./CHEATSHEET_GUIDLINES.md) to learn how to document components in the Cheatsheet.
