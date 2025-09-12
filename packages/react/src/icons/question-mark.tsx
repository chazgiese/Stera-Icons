const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const QuestionMark = memo(
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
          d: "M12 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4M12 2c3.687 0 7 2.523 7 6 0 3.159-2.735 5.53-6 5.937V15.5a1 1 0 1 1-2 0V13a1 1 0 0 1 1-1c2.94 0 5-1.954 5-4s-2.06-4-5-4C9.423 4 7.39 5.521 6.97 7.236a1 1 0 0 1-1.943-.472C5.722 3.914 8.771 2 12 2",
        }),
      }))
);
QuestionMark.displayName = "QuestionMark";
export { QuestionMark };
