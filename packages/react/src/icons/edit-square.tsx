const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const EditSquare = memo(
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
            d: "M11 2a1 1 0 1 1 0 2H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-3a1 1 0 1 1 2 0v3a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M16.172 2.172a4 4 0 0 1 5.665 5.647l-8.121 8.334c-.162.166-.377.27-.608.296l-5 .545a1 1 0 0 1-1.095-1.15l.757-4.789.036-.15a1 1 0 0 1 .235-.391l8.122-8.333zm4.242 1.414a2 2 0 0 0-2.828 0h-.001l-7.89 8.096-.504 3.182 3.343-.366 7.871-8.074.01-.01a2 2 0 0 0 0-2.828",
            clipRule: "evenodd",
          }),
        ],
      }))
);
EditSquare.displayName = "EditSquare";
export { EditSquare };
export default EditSquare;
