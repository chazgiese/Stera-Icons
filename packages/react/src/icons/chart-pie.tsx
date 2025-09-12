import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const ChartPie = memo(
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
      /*#__PURE__*/ _reactJsxRuntime.jsxs("svg", {
        fill: color,
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        className: className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ref: ref,
        ...props,
        children: [
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            d: "M7.6 1.916a1 1 0 1 1 .8 1.832A9 9 0 0 0 3 12a9.003 9.003 0 0 0 17.252 3.6 1 1 0 1 1 1.832.8A11 11 0 0 1 12 23C5.925 23 1 18.075 1 12 1 7.488 3.717 3.613 7.6 1.916",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M12 1a11 11 0 0 1 10.163 6.79C22.716 9.125 23 10.556 23 12a1 1 0 0 1-1 1H12a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m1 10h7.942a9 9 0 0 0-2.578-5.364A9 9 0 0 0 13 3.056z",
            clipRule: "evenodd",
          }),
        ],
      }))
);
ChartPie.displayName = "ChartPie";
export { ChartPie };
export default ChartPie;
