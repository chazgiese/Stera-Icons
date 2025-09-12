const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const GlobeFilled = memo(
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
          d: "M8.63 2.566a18 18 0 0 0-2.606 7.962.51.51 0 0 1-.506.472H1.594a.482.482 0 0 1-.485-.544 11.01 11.01 0 0 1 7.133-8.795c.42-.153.76.302.526.683zM13.665 3.614a16 16 0 0 1 2.299 6.855.49.49 0 0 1-.49.531H8.526a.49.49 0 0 1-.49-.53 16 16 0 0 1 2.299-6.856c.146-.238.801-1.263 1.244-1.956a.5.5 0 0 1 .841 0c.444.693 1.099 1.718 1.245 1.956M15.232 2.344c-.234-.38.106-.836.526-.683a11.01 11.01 0 0 1 7.132 8.795.482.482 0 0 1-.484.544h-3.924a.51.51 0 0 1-.506-.472 18 18 0 0 0-2.607-7.962zM8.63 21.434a18 18 0 0 1-2.606-7.962.51.51 0 0 0-.506-.472H1.594a.482.482 0 0 0-.485.544 11.01 11.01 0 0 0 7.133 8.795c.42.153.76-.302.526-.682zM13.665 20.386a16 16 0 0 0 2.299-6.855.49.49 0 0 0-.49-.531H8.526a.49.49 0 0 0-.49.53 16 16 0 0 0 2.299 6.856c.146.238.801 1.263 1.244 1.956a.5.5 0 0 0 .841 0c.444-.693 1.099-1.718 1.245-1.956M15.232 21.656c-.234.38.106.836.526.683a11.01 11.01 0 0 0 7.132-8.795.482.482 0 0 0-.484-.544h-3.924a.51.51 0 0 0-.506.472 18 18 0 0 1-2.607 7.962z",
        }),
      }))
);
GlobeFilled.displayName = "GlobeFilled";
export { GlobeFilled };
