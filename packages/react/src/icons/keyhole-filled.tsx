const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const KeyholeFilled = memo(
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
          d: "M12 2a6.5 6.5 0 0 1 4.642 11.049l2.89 5.78A1.5 1.5 0 0 1 18.192 21H5.807a1.5 1.5 0 0 1-1.34-2.17l2.89-5.781A6.5 6.5 0 0 1 12 2",
        }),
      }))
);
KeyholeFilled.displayName = "KeyholeFilled";
export { KeyholeFilled };
export default KeyholeFilled;
