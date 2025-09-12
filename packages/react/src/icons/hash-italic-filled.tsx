import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const HashItalicFilled = memo(
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
          fillRule: "evenodd",
          d: "M16.023 2.784a1 1 0 0 1 1.954.433L16.914 8H21a1 1 0 1 1 0 2h-4.531l-.889 4H19a1 1 0 1 1 0 2h-3.864l-1.16 5.217a1.001 1.001 0 0 1-1.953-.433L13.087 16H9.136l-1.16 5.216a1.001 1.001 0 0 1-1.953-.433L7.087 16H3a1 1 0 0 1 0-2h4.531l.889-4H5a1 1 0 0 1 0-2h3.864l1.16-5.217a1 1 0 0 1 1.953.433L10.914 8h3.95zM9.58 14h3.951l.889-4h-3.951z",
          clipRule: "evenodd",
        }),
      }))
);
HashItalicFilled.displayName = "HashItalicFilled";
export { HashItalicFilled };
export default HashItalicFilled;
