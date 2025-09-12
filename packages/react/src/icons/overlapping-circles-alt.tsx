import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const OverlappingCirclesAlt = memo(
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
            d: "M8.5 4.5a7.47 7.47 0 0 1 4.04 1.18 1 1 0 0 1-.218 1.787 1 1 0 0 1-.17.169 5.5 5.5 0 0 0-1.016 1.016A1 1 0 0 1 9.55 7.434q.276-.36.593-.682a5.5 5.5 0 1 0 0 10.495 8 8 0 0 1-.593-.68 1 1 0 0 1 1.586-1.22c.293.382.635.724 1.016 1.017q.097.076.17.168a1 1 0 0 1 .217 1.788A7.5 7.5 0 1 1 8.5 4.5M16.22 17.453a1 1 0 0 1 .259 1.983 7.6 7.6 0 0 1-1.957 0 1 1 0 0 1 .258-1.983 5.6 5.6 0 0 0 1.44 0M19.864 15.348a1 1 0 0 1 1.586 1.218c-.399.52-.864.985-1.384 1.384a1 1 0 0 1-1.218-1.586 5.6 5.6 0 0 0 1.016-1.016",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            d: "M9.185 10.16a1 1 0 0 1 .862 1.12 5.6 5.6 0 0 0 0 1.44 1 1 0 0 1-1.984.258 7.6 7.6 0 0 1 0-1.957 1 1 0 0 1 1.122-.862M21.815 10.16a1 1 0 0 1 1.121.861 7.6 7.6 0 0 1 0 1.957 1 1 0 0 1-1.983-.258 5.6 5.6 0 0 0 0-1.44 1 1 0 0 1 .862-1.12M18.664 6.233a1 1 0 0 1 1.402-.183c.52.399.985.864 1.384 1.384a1 1 0 0 1-1.586 1.218 5.5 5.5 0 0 0-1.016-1.016 1 1 0 0 1-.184-1.403M15.5 4.5q.497 0 .979.063a1 1 0 0 1-.26 1.984 5.6 5.6 0 0 0-1.439 0 1 1 0 0 1-.258-1.984q.48-.062.978-.063",
          }),
        ],
      }))
);
OverlappingCirclesAlt.displayName = "OverlappingCirclesAlt";
export { OverlappingCirclesAlt };
export default OverlappingCirclesAlt;
