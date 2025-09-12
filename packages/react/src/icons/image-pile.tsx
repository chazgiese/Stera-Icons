const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ImagePile = memo(
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
            d: "M11.917 9.599a1.834 1.834 0 1 1 .446 3.64 1.834 1.834 0 0 1-.446-3.64",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M13.354 5.111a4 4 0 0 1 4.458 3.484l1.057 8.602a4 4 0 0 1-3.483 4.457l-8.603 1.057a4 4 0 0 1-4.457-3.482L1.27 10.626a4 4 0 0 1 3.483-4.458zM8.128 16.534a1.057 1.057 0 0 0-1.483.183l-2.19 2.802a2 2 0 0 0 2.085 1.207l6.008-.739zm5.47-9.437L4.997 8.153a2 2 0 0 0-1.741 2.229l.788 6.417 1.027-1.315a3.056 3.056 0 0 1 4.29-.526l5.983 4.676a2 2 0 0 0 1.54-2.194l-1.056-8.602A2 2 0 0 0 13.6 7.097",
            clipRule: "evenodd",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            d: "M7.246 2.996a4.67 4.67 0 0 1 4.48-2.084l7.279.894a4.667 4.667 0 0 1 4.062 5.2l-.893 7.28a4.7 4.7 0 0 1-.412 1.425 1 1 0 1 1-1.808-.855c.118-.25.2-.523.235-.815l.894-7.278a2.667 2.667 0 0 0-2.322-2.972l-7.279-.894a2.67 2.67 0 0 0-2.56 1.192 1 1 0 0 1-1.676-1.093",
          }),
        ],
      }))
);
ImagePile.displayName = "ImagePile";
export { ImagePile };
export default ImagePile;
