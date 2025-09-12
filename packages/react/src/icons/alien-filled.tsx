const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const AlienFilled = memo(
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
          d: "M12 2c4.992 0 9 4.132 9 9.182 0 2.526-1.447 4.741-3.012 6.417-1.584 1.696-3.43 2.99-4.518 3.683a2.72 2.72 0 0 1-2.94 0c-1.088-.693-2.933-1.987-4.518-3.683C4.447 15.923 3 13.708 3 11.182 3 6.132 7.008 2 12 2m2 13.827a.646.646 0 0 0-.803-.626l-.784.195a1.7 1.7 0 0 1-.826 0l-.784-.195a.646.646 0 0 0-.803.626c0 .395.269.74.652.836l.863.216c.318.08.652.08.97 0l.863-.216a.86.86 0 0 0 .652-.836M7.5 9a1 1 0 0 0-1 1 3 3 0 0 0 3 3 1 1 0 0 0 1-1 3 3 0 0 0-3-3m9 0a3 3 0 0 0-3 3 1 1 0 0 0 1 1 3 3 0 0 0 3-3 1 1 0 0 0-1-1",
          clipRule: "evenodd",
        }),
      }))
);
AlienFilled.displayName = "AlienFilled";
export { AlienFilled };
