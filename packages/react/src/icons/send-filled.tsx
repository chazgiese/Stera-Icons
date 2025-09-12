const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const SendFilled = memo(
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
          d: "M21.886 4.823c.558-1.675-1.035-3.268-2.71-2.71L3.464 7.348c-1.99.664-1.94 3.497.072 4.09l5.881 1.728 5.116-5.116a1 1 0 1 1 1.415 1.414L10.83 14.58l1.729 5.88c.592 2.014 3.425 2.064 4.089.073z",
        }),
      }))
);
SendFilled.displayName = "SendFilled";
export { SendFilled };
