var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const Alien = memo(
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
            d: "M13.197 15.201a.646.646 0 0 1 .803.626c0 .395-.269.74-.652.836l-.863.216c-.318.08-.652.08-.97 0l-.863-.216a.86.86 0 0 1-.652-.836c0-.42.395-.728.803-.626l.784.195c.271.068.555.068.826 0zM8 9a3 3 0 0 1 3 3 1 1 0 0 1-1 1 3 3 0 0 1-3-3 1 1 0 0 1 1-1M16 9a1 1 0 0 1 1 1 3 3 0 0 1-3 3 1 1 0 0 1-1-1 3 3 0 0 1 3-3",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M12 2c4.992 0 9 4.132 9 9.182 0 3.19-2.306 5.903-4.337 7.703a25.7 25.7 0 0 1-3.809 2.776c-.123.073-.245.152-.373.216h-.002c-.298.164-.66.164-.957 0-.13-.064-.253-.142-.377-.216a25.72 25.72 0 0 1-3.809-2.776C5.307 17.085 3 14.372 3 11.182 3 6.132 7.008 2 12 2m0 2c-3.845 0-7 3.194-7 7.182 0 2.264 1.694 4.46 3.663 6.206A23.7 23.7 0 0 0 12 19.84a23.703 23.703 0 0 0 3.337-2.452C17.307 15.642 19 13.446 19 11.182 19 7.194 15.845 4 12 4",
            clipRule: "evenodd",
          }),
        ],
      }))
);
Alien.displayName = "Alien";
export { Alien };
export default Alien;
