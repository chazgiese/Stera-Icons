const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const CloudArrowUpFilled = memo(
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
          d: "M12 4a7 7 0 0 1 6.327 4.009A6 6 0 0 1 18 20H5a5 5 0 0 1 0-10l.071.002A7 7 0 0 1 12 4m.707 4.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 1 0 1.414 1.414L11 11.414V17a1 1 0 1 0 2 0v-5.586l2.293 2.293a1 1 0 1 0 1.414-1.414z",
          clipRule: "evenodd",
        }),
      }))
);
CloudArrowUpFilled.displayName = "CloudArrowUpFilled";
export { CloudArrowUpFilled };
export default CloudArrowUpFilled;
