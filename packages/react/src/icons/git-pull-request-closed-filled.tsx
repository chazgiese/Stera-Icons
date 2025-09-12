const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const GitPullRequestClosedFilled = memo(
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
          d: "M5.5 2a3.5 3.5 0 0 1 1 6.854v6.292a3.501 3.501 0 1 1-2 0V8.854A3.5 3.5 0 0 1 5.5 2M18.5 10a1 1 0 0 1 1 1v4.146a3.501 3.501 0 1 1-2 0V11a1 1 0 0 1 1-1M20.293 2.293a1 1 0 1 1 1.414 1.414L19.914 5.5l1.793 1.793a1 1 0 1 1-1.414 1.414L18.5 6.914l-1.793 1.793a1 1 0 1 1-1.414-1.414L17.086 5.5l-1.793-1.793a1 1 0 1 1 1.414-1.414L18.5 4.086z",
        }),
      }))
);
GitPullRequestClosedFilled.displayName = "GitPullRequestClosedFilled";
export { GitPullRequestClosedFilled };
