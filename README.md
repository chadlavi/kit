# Kit 
[![npm version](https://badge.fury.io/js/%40chadlavi%2Fkit.svg)](https://www.npmjs.com/package/@chadlavi/kit)

A swiss army knife component that accepts JSS on its `style` prop... but then turns those styles into `@emotion/styled` classes. Like writing inline styles, but not.


See also [kit-tokens](https://github.com/chadlavi/kit-tokens).

## Example usage

When using Kit, pretend you're just writing inline styles with the `style` prop. Kit uses `@emotion/styled` under the hood to turn the CSS properties you pass to `style` into actual classnames.

You can also use `Kit.withComponent` to change the semantic HTML element used for Kit.

```tsx
import Kit from "@chadlavi/kit";
import { color, spacing } from "@chadlavi/kit-tokens";

const Button = Kit.withComponent("button");

const Example = () => (
  <Button
    style={{
      background: color.primary.hex,
      color: color.white,
      border: "none",
      padding: spacing.units(2),
      cursor: "pointer",
      borderRadius: spacing.units(0.75),
      fontSize: spacing.units(2)
    }}
    onClick={() => {
      console.log("ok");
    }}
  >
    Kit button
  </Button>
);
```
(cf. https://codesandbox.io/s/chadlavi-kit-66t5g?file=/src/App.tsx)
