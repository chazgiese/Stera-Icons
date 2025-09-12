var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ThumbsDownFilled = memo(
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
          d: "m6 4.5.007-.257A5 5 0 0 1 6.67 2H6a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3zM13 22c1.174 0 2.123-.381 2.795-1.1.647-.694.935-1.595 1.032-2.46.127-1.134-.054-2.373-.37-3.44h1.82c1.772 0 3.194-1.544 2.939-3.346a33 33 0 0 0-.268-1.635c-.153-.782-.506-2.073-.81-3.133-.153-.538-.298-1.03-.404-1.386l-.127-.423-.035-.116-.01-.031-.002-.008V4.92h-.002A4 4 0 0 0 15.709 2H9.344a3 3 0 0 0-1.34 2.346L8 4.5v10.716c.465.208.863.559 1.124 1.016l3.008 5.264.073.111A1 1 0 0 0 13 22",
        }),
      }))
);
ThumbsDownFilled.displayName = "ThumbsDownFilled";
export { ThumbsDownFilled };
export default ThumbsDownFilled;
