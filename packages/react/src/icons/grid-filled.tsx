import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const GridFilled = memo(
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
          d: "M7.5 22H6.2c-.543 0-1.012.001-1.395-.03-.396-.033-.789-.104-1.167-.297a3 3 0 0 1-1.31-1.31c-.194-.379-.265-.772-.298-1.168a10 10 0 0 1-.026-.637L2 17.8v-1.3h5.5zM14.5 22h-5v-5.5h5zM22 17.8c0 .543.001 1.012-.03 1.395-.033.396-.104.789-.297 1.167a3 3 0 0 1-1.31 1.31c-.379.194-.772.265-1.168.298-.383.031-.852.03-1.395.03h-1.3v-5.5H22zM7.5 14.5H2v-5h5.5zM14.5 14.5h-5v-5h5zM22 14.5h-5.5v-5H22zM7.5 7.5H2V6.2c0-.543-.001-1.012.03-1.395.033-.396.104-.789.297-1.167a3 3 0 0 1 1.31-1.31c.379-.194.772-.265 1.168-.298C5.188 2 5.657 2 6.2 2h1.3zM14.5 7.5h-5V2h5zM18.558 2.004c.232.004.445.01.637.026.396.033.789.104 1.167.297a3 3 0 0 1 1.31 1.31c.194.379.265.772.298 1.168.031.383.03.852.03 1.395v1.3h-5.5V2h1.3z",
        }),
      }))
);
GridFilled.displayName = "GridFilled";
export { GridFilled };
export default GridFilled;
