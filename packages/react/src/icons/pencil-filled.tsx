var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const PencilFilled = memo(
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
          d: "M3.533 14.749q.21.015.422.052c1.116.197 2.308.877 3.337 1.906 1.03 1.03 1.71 2.222 1.908 3.338q.036.212.05.422l-.007.003-6 1.5a1 1 0 0 1-1.212-1.213zM12.844 5.241q.303.005.611.06c1.117.197 2.308.877 3.337 1.906 1.03 1.03 1.71 2.222 1.908 3.338q.054.308.058.61l-7.776 7.777c-.407-1.338-1.233-2.598-2.275-3.639s-2.3-1.868-3.64-2.275zM15.793 2.293c.837-.836 1.882-1.084 2.881-.907.96.17 1.843.716 2.533 1.406s1.237 1.574 1.407 2.533c.176 1-.07 2.046-.907 2.882l-1.225 1.225c-.407-1.338-1.233-2.598-2.275-3.639s-2.3-1.868-3.64-2.275z",
        }),
      }))
);
PencilFilled.displayName = "PencilFilled";
export { PencilFilled };
export default PencilFilled;
