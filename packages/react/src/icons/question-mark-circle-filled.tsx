var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const QuestionMarkCircleFilled = memo(
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
          d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-11C9.768 5 7.549 6.272 7.03 8.314a1 1 0 0 0 1.94.492C9.193 7.927 10.362 7 12 7c1.877 0 3 1.182 3 2.2s-1.123 2.2-3 2.2a1 1 0 0 0-1 1V14a1 1 0 1 0 2 0v-.688c2.15-.374 4-1.929 4-4.112C17 6.684 14.542 5 12 5",
          clipRule: "evenodd",
        }),
      }))
);
QuestionMarkCircleFilled.displayName = "QuestionMarkCircleFilled";
export { QuestionMarkCircleFilled };
export default QuestionMarkCircleFilled;
