var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const LayersFilled = memo(
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
          /*#__PURE__*/ _reactJsxRuntime.jsxs("g", {
            fill: "currentColor",
            clipPath: "url(#a)",
            children: [
              /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
                d: "M9.48 2.311a5 5 0 0 1 5.04 0l8.504 4.961c1.322.772 1.322 2.683 0 3.455l-8.504 4.961a5 5 0 0 1-5.04 0l-8.503-4.96c-1.323-.773-1.323-2.684 0-3.456z",
              }),
              /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
                d: "M22.818 13.162c1.32.926 1.266 2.946-.164 3.781L14.52 21.69a5 5 0 0 1-5.04 0l-8.133-4.746c-1.43-.835-1.486-2.855-.165-3.78l8.299 4.84a5 5 0 0 0 5.039 0z",
              }),
            ],
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("defs", {
            children: /*#__PURE__*/ _reactJsxRuntime.jsx("clipPath", {
              id: "a",
              children: /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
                fill: "currentColor",
                d: "M0 0h24v24H0z",
              }),
            }),
          }),
        ],
      }))
);
LayersFilled.displayName = "LayersFilled";
export { LayersFilled };
export default LayersFilled;
