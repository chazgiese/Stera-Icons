const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const SpeakerFilled = memo(
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
          d: "M13.586 4C14.846 2.74 17 3.632 17 5.414v13.172c0 1.782-2.154 2.674-3.414 1.414l-4-4H7a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.586z",
        }),
      }))
);
SpeakerFilled.displayName = "SpeakerFilled";
export { SpeakerFilled };
export default SpeakerFilled;
