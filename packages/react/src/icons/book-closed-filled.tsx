const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const BookClosedFilled = memo(
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
          d: "M17.6 1c.403 0 .767-.001 1.067.023.312.026.643.084.968.25a2.5 2.5 0 0 1 1.092 1.092c.166.325.224.656.25.968.024.3.023.664.023 1.067V17a1 1 0 0 1-1 1c-.356 0-1 .452-1 1.5s.644 1.5 1 1.5a1 1 0 1 1 0 2H6.5a3.5 3.5 0 0 1-3.484-3.827A1 1 0 0 1 3 19V7.6c0-.964-.001-1.747.05-2.38.054-.646.166-1.224.44-1.763A4.5 4.5 0 0 1 5.457 1.49c.539-.274 1.117-.386 1.763-.44C7.853 1 8.636 1 9.6 1zM6.5 18a1.5 1.5 0 0 0 0 3h10.795A4 4 0 0 1 17 19.5c0-.51.103-1.026.295-1.5zM8 7a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2z",
          clipRule: "evenodd",
        }),
      }))
);
BookClosedFilled.displayName = "BookClosedFilled";
export { BookClosedFilled };
export default BookClosedFilled;
