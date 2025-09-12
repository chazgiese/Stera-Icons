const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const GitCommit = memo(
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
          d: "M12 7a5 5 0 0 1 4.9 4H22a1 1 0 1 1 0 2h-5.1a5.001 5.001 0 0 1-9.8 0H2a1 1 0 1 1 0-2h5.1c.464-2.282 2.481-4 4.9-4m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6",
          clipRule: "evenodd",
        }),
      }))
);
GitCommit.displayName = "GitCommit";
export { GitCommit };
export default GitCommit;
