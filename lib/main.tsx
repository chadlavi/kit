import styled from "@emotion/styled";

/**
 * A swiss army knife component that accepts JSS on its `style` prop... but
 * then turns those styles into @emotion/styled classes. Like writing inline
 * styles, but not.
 */
export const Component = styled("div", {
  shouldForwardProp: (p) => p !== "style"
})(({style}) => ({
  ...style
}));
