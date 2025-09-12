const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const GitMergeFilled = memo(
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
          d: "M5.5 2a3.5 3.5 0 0 1 1.115 6.817A3 3 0 0 0 9.5 11h5.646a3.501 3.501 0 1 1 0 2H9.5a4.98 4.98 0 0 1-3-1.001v3.146a3.501 3.501 0 1 1-2 0V8.855A3.5 3.5 0 0 1 5.5 2",
        }),
      }))
);
GitMergeFilled.displayName = "GitMergeFilled";
export { GitMergeFilled };
export default GitMergeFilled;
