const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const CheckmarkCircle = memo(
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
            d: "M16.293 8.293a1 1 0 1 1 1.414 1.414l-5.695 5.695c-.213.213-.417.418-.602.574-.192.161-.44.338-.765.428a2 2 0 0 1-1.34-.095 2 2 0 0 1-.698-.533c-.16-.18-.334-.412-.514-.652L6.2 12.6a1 1 0 1 1 1.6-1.2l1.893 2.524c.202.268.316.418.406.52l.01.011.014-.01c.104-.087.237-.22.475-.457z",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18",
            clipRule: "evenodd",
          }),
        ],
      }))
);
CheckmarkCircle.displayName = "CheckmarkCircle";
export { CheckmarkCircle };
export default CheckmarkCircle;
