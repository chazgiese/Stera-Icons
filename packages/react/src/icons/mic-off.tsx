var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const MicOff = memo(
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
            fillRule: "evenodd",
            d: "M1.293 1.293a1 1 0 0 1 1.414 0l12.228 12.228a1 1 0 0 1 .12.12l2.724 2.724q.067.055.125.124l.003.004 4.8 4.8a1 1 0 0 1-1.414 1.414l-4.252-4.252A8.96 8.96 0 0 1 13 19.942V21h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-1.058c-4.5-.497-8-4.31-8-8.942a1 1 0 1 1 2 0 7 7 0 0 0 10.593 6.007l-1.479-1.479A5 5 0 0 1 7 11V8.414L1.293 2.707a1 1 0 0 1 0-1.414M9 11a3 3 0 0 0 3.536 2.95L9 10.414z",
            clipRule: "evenodd",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            d: "M20 10a1 1 0 0 1 1 1c0 1.543-.39 2.999-1.076 4.27a1 1 0 0 1-1.76-.95A6.97 6.97 0 0 0 19 11a1 1 0 0 1 1-1M12 1a5 5 0 0 1 5 5v5.055a1 1 0 0 1-2 0V6a3 3 0 0 0-5.48-1.69 1 1 0 0 1-1.65-1.128A5 5 0 0 1 12 1",
          }),
        ],
      }))
);
MicOff.displayName = "MicOff";
export { MicOff };
export default MicOff;
