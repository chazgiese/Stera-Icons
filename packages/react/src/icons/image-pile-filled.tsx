import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const ImagePileFilled = memo(
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
            fillRule: "evenodd",
            d: "M13.354 5.112a4 4 0 0 1 4.458 3.483l1.056 8.602a4 4 0 0 1-3.482 4.457l-8.603 1.057a4 4 0 0 1-4.458-3.482L1.27 10.626a4 4 0 0 1 3.483-4.458zM9.36 14.957a3.057 3.057 0 0 0-4.289.527l-1.027 1.314.268 2.186.036.202a2 2 0 0 0 2.193 1.54l8.603-1.057c.09-.011.142 0 .2-.036zM11.917 9.6a1.834 1.834 0 1 0 .447 3.64 1.834 1.834 0 0 0-.447-3.64",
            clipRule: "evenodd",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            d: "M6.374 3.953a4 4 0 0 1 4.27-2.663l8.602 1.056a4 4 0 0 1 3.483 4.458l-1.057 8.602a4 4 0 0 1-.785 1.93 6 6 0 0 0-.034-.382l-1.056-8.603a6 6 0 0 0-6.686-5.224z",
          }),
        ],
      }))
);
ImagePileFilled.displayName = "ImagePileFilled";
export { ImagePileFilled };
export default ImagePileFilled;
