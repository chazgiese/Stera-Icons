const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const VideoOffFilled = memo(
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
          d: "M.229 4.365a1 1 0 0 1 1.407-.136l17 14a1 1 0 0 1-1.272 1.543l-17-14A1 1 0 0 1 .23 4.365M14.041 18.979c-.353.02-.768.021-1.241.021H5.2c-.543 0-1.012.001-1.395-.03-.395-.032-.789-.104-1.167-.297a3 3 0 0 1-1.31-1.31c-.193-.379-.265-.772-.298-1.167C1 15.812 1 15.343 1 14.8V9.2c0-.35 0-.67.008-.955zM21.36 6.232a1 1 0 0 1 1.63.625L23 7v10a1 1 0 0 1-1.64.769l-3-2.5A1 1 0 0 1 18 14.5v-5a1 1 0 0 1 .36-.768zM12.8 5c.543 0 1.012 0 1.395.03.396.033.79.105 1.168.297a3 3 0 0 1 1.31 1.311c.193.378.265.772.297 1.167.031.384.03.852.03 1.396v5.737L4.932 5c2.622-.003 5.245 0 7.867 0",
        }),
      }))
);
VideoOffFilled.displayName = "VideoOffFilled";
export { VideoOffFilled };
export default VideoOffFilled;
