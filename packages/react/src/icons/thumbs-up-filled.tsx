import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const ThumbsUpFilled = memo(
  forwardRef < SVGSVGElement,
  IconProps >
    ((
      {
        size = 24,
        color = "currentColor",
        className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ...props
      },
      ref
    ) =>
      /*#__PURE__*/ _reactJsxRuntime.jsx("svg", {
        fill: color,
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        className: className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ref: ref,
        ...props,
        children: /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
          fill: "currentColor",
          d: "m6 19.5.007.257c.041.814.278 1.577.663 2.243H6a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3zM13 2c1.174 0 2.123.381 2.795 1.1.647.694.935 1.595 1.032 2.46.127 1.134-.054 2.373-.37 3.44h1.82c1.772 0 3.194 1.544 2.939 3.346-.079.553-.17 1.136-.268 1.635-.153.782-.506 2.073-.81 3.133-.153.538-.298 1.03-.404 1.386l-.127.423-.035.116-.01.031-.002.008v.002h-.002A4 4 0 0 1 15.709 22H9.344a3 3 0 0 1-1.34-2.346L8 19.5V8.784c.465-.208.863-.559 1.124-1.016l3.008-5.264.073-.111A1 1 0 0 1 13 2",
        }),
      }))
);
ThumbsUpFilled.displayName = "ThumbsUpFilled";
export { ThumbsUpFilled };
export default ThumbsUpFilled;
