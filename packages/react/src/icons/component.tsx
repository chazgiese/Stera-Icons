const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const Component = memo(
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
          d: "M10.586 14a2 2 0 0 1 2.828 0L16 16.586a2 2 0 0 1 0 2.828L13.414 22a2 2 0 0 1-2.828 0L8 19.414a2 2 0 0 1 0-2.828zm-1.172 4L12 20.586 14.586 18 12 15.414zM4.586 8a2 2 0 0 1 2.828 0L10 10.586a2 2 0 0 1 0 2.828L7.414 16a2 2 0 0 1-2.828 0L2 13.414a2 2 0 0 1 0-2.828zm-1.172 4L6 14.586 8.586 12 6 9.414zM16.586 8a2 2 0 0 1 2.828 0L22 10.586a2 2 0 0 1 0 2.828L19.414 16a2 2 0 0 1-2.828 0L14 13.414a2 2 0 0 1 0-2.828zm-1.172 4L18 14.586 20.586 12 18 9.414zM10.586 2a2 2 0 0 1 2.828 0L16 4.586a2 2 0 0 1 0 2.828L13.414 10a2 2 0 0 1-2.828 0L8 7.414a2 2 0 0 1 0-2.828zM9.414 6 12 8.586 14.586 6 12 3.414z",
          clipRule: "evenodd",
        }),
      }))
);
Component.displayName = "Component";
export { Component };
export default Component;
