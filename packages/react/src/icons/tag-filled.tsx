var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const TagFilled = memo(
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
          d: "M11.675 2c.441 0 .825-.006 1.197.083.306.073.599.195.867.36.326.2.593.475.905.787l6.3 6.3c.384.384.716.715.965 1.008.257.302.484.631.615 1.035a3 3 0 0 1 0 1.854c-.131.404-.358.732-.615 1.035-.25.293-.58.623-.965 1.008l-5.474 5.474c-.385.384-.715.716-1.008.965-.303.257-.631.484-1.035.615a3 3 0 0 1-1.854 0c-.404-.13-.733-.358-1.035-.615-.293-.249-.624-.58-1.008-.965l-6.3-6.3c-.312-.312-.588-.579-.788-.905a3 3 0 0 1-.36-.867C1.995 12.5 2 12.116 2 11.675V4.6c0-.264-.001-.522.016-.739.02-.228.063-.498.202-.77.191-.375.497-.682.874-.873.27-.138.54-.183.77-.201.216-.018.474-.017.737-.017zM7.75 6a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5",
          clipRule: "evenodd",
        }),
      }))
);
TagFilled.displayName = "TagFilled";
export { TagFilled };
export default TagFilled;
