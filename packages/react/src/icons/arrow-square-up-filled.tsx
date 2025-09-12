import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const ArrowSquareUpFilled = memo(
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
          d: "M12 2c1.384 0 2.472 0 3.35.06.888.06 1.635.186 2.329.473a7 7 0 0 1 3.788 3.788c.287.694.413 1.44.473 2.328.06.879.06 1.967.06 3.351s0 2.472-.06 3.35c-.06.888-.186 1.635-.473 2.329a7 7 0 0 1-3.788 3.788c-.694.287-1.44.413-2.328.473-.879.06-1.967.06-3.351.06s-2.472 0-3.35-.06c-.888-.06-1.635-.186-2.329-.473a7 7 0 0 1-3.788-3.788c-.287-.694-.413-1.44-.473-2.328C2 14.472 2 13.384 2 12s0-2.472.06-3.35c.06-.888.186-1.635.473-2.329a7 7 0 0 1 3.788-3.788c.694-.287 1.44-.413 2.328-.473C9.528 2 10.616 2 12 2m0 4a1 1 0 0 0-.634.227l-.073.066-5 5a1 1 0 1 0 1.414 1.414L11 9.414V17a1 1 0 1 0 2 0V9.414l3.293 3.293a1 1 0 1 0 1.414-1.414l-5-5A1 1 0 0 0 12 6",
          clipRule: "evenodd",
        }),
      }))
);
ArrowSquareUpFilled.displayName = "ArrowSquareUpFilled";
export { ArrowSquareUpFilled };
export default ArrowSquareUpFilled;
