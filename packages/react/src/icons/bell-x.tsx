const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const BellX = memo(
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
            d: "M13.794 7.293a1 1 0 0 1 1.413 1.414L13.416 10.5l1.793 1.793a1 1 0 0 1-1.415 1.414l-1.792-1.793-1.793 1.793a1 1 0 0 1-1.415-1.414l1.793-1.793-1.793-1.793a1 1 0 1 1 1.415-1.414L12 9.086z",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M12 1a9 9 0 0 1 9 9v2.446c0 .181.05.36.143.515l.898 1.495c1.199 2-.241 4.544-2.573 4.544H16.9A5.002 5.002 0 0 1 7.1 19H4.533C2.2 19 .76 16.456 1.96 14.456l.898-1.495c.093-.155.142-.334.143-.515V10a9 9 0 0 1 9-9M9.175 19a2.998 2.998 0 0 0 5.651 0zm2.827-16a7 7 0 0 0-7 7v2.446a3 3 0 0 1-.428 1.543l-.898 1.496A1 1 0 0 0 4.533 17h14.935a1 1 0 0 0 .858-1.515l-.898-1.496A3 3 0 0 1 19 12.446V10a7 7 0 0 0-7-7",
            clipRule: "evenodd",
          }),
        ],
      }))
);
BellX.displayName = "BellX";
export { BellX };
export default BellX;
