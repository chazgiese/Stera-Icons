const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const BellXFilled = memo(
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
          d: "M12 1a9 9 0 0 1 9 9v.784a7 7 0 0 0 .997 3.602l.497.828c1 1.666-.2 3.786-2.143 3.786H16.9a5.001 5.001 0 0 1-9.8 0H3.65c-1.944 0-3.144-2.12-2.144-3.786l.497-.828A7 7 0 0 0 3 10.784V10a9 9 0 0 1 9-9M9.174 19c.412 1.165 1.52 2 2.826 2a3 3 0 0 0 2.826-2zm6.033-11.707a1 1 0 0 0-1.414 0L12 9.086l-1.793-1.793a1 1 0 0 0-1.414 1.414l1.793 1.793-1.793 1.793a1 1 0 1 0 1.414 1.414L12 11.914l1.793 1.793a1 1 0 0 0 1.414-1.414L13.414 10.5l1.793-1.793a1 1 0 0 0 0-1.414",
          clipRule: "evenodd",
        }),
      }))
);
BellXFilled.displayName = "BellXFilled";
export { BellXFilled };
