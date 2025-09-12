const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const GitPullRequest = memo(
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
          d: "M5.5 2a3.5 3.5 0 0 1 1 6.854v6.292a3.501 3.501 0 1 1-2 0V8.854A3.5 3.5 0 0 1 5.5 2m8.293-.207a1 1 0 1 1 1.414 1.414L13.914 4.5H15.5a4 4 0 0 1 4 4v6.646a3.501 3.501 0 1 1-2 0V8.5a2 2 0 0 0-2-2h-1.586l1.293 1.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414zM5.5 17a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m13 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M5.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3",
        }),
      }))
);
GitPullRequest.displayName = "GitPullRequest";
export { GitPullRequest };
export default GitPullRequest;
