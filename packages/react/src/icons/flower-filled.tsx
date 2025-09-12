const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const FlowerFilled = memo(
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
            d: "M12 9.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M12 6.507c0-2.892 2.621-5.667 5.501-4.009 2.88 1.659 1.777 5.31-.732 6.755C19.28 7.808 23 8.683 23 12s-3.721 4.191-6.23 2.746c2.509 1.445 3.61 5.097.731 6.755C14.621 23.16 12 20.384 12 17.492c0 2.89-2.62 5.668-5.499 4.01-2.88-1.658-1.781-5.31.73-6.756C4.72 16.191 1 15.316 1 12s3.72-4.192 6.23-2.746c-2.51-1.446-3.61-5.097-.729-6.756S12 3.618 12 6.507m0 1.104a4.44 4.44 0 0 0-3.81 2.195 4.38 4.38 0 0 0 0 4.388A4.4 4.4 0 0 0 12 16.389a4.44 4.44 0 0 0 3.812-2.194 4.38 4.38 0 0 0 0-4.39A4.4 4.4 0 0 0 12 7.61",
            clipRule: "evenodd",
          }),
        ],
      }))
);
FlowerFilled.displayName = "FlowerFilled";
export { FlowerFilled };
export default FlowerFilled;
