const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const SearchCircleFilled = memo(
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
      /*#__PURE__*/ _reactJsxRuntime.jsxs("svg", {
        fill: color,
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        className: className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ref: ref,
        ...props,
        children: [
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            d: "M11 8a3 3 0 0 1 3 3c0 .802-.317 1.528-.83 2.066l-.054.05-.047.052A2.99 2.99 0 0 1 11 14a3 3 0 1 1 0-6",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m-1 5a5 5 0 1 0 2.54 9.307l2.076 2.077a1.25 1.25 0 0 0 1.768-1.768l-2.077-2.077A5 5 0 0 0 11 6",
            clipRule: "evenodd",
          }),
        ],
      }))
);
SearchCircleFilled.displayName = "SearchCircleFilled";
export { SearchCircleFilled };
export default SearchCircleFilled;
