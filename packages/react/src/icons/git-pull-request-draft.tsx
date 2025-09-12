const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const GitPullRequestDraft = memo(
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
          d: "M5.5 2a3.5 3.5 0 0 1 1 6.854v6.292a3.501 3.501 0 1 1-2 0V8.854A3.5 3.5 0 0 1 5.5 2m13 13a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m-13 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m13 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-8a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0-5.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4M5.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3",
        }),
      }))
);
GitPullRequestDraft.displayName = "GitPullRequestDraft";
export { GitPullRequestDraft };
export default GitPullRequestDraft;
