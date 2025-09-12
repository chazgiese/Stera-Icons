var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const Send = memo(
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
          d: "M19.178 2.112c1.675-.558 3.268 1.036 2.71 2.71l-5.237 15.712c-.664 1.99-3.497 1.94-4.09-.072l-2.049-6.974-6.974-2.05c-2.013-.592-2.063-3.425-.072-4.089zM12.443 12.97l2.038 6.927c.015.053.035.07.046.077a.16.16 0 0 0 .089.026.16.16 0 0 0 .088-.023c.011-.007.032-.023.05-.075l4.62-13.862zM4.098 9.246c-.052.017-.068.039-.075.05A.16.16 0 0 0 4 9.384c.001.041.013.072.026.09.007.01.024.03.077.045l6.926 2.037 6.93-6.93z",
          clipRule: "evenodd",
        }),
      }))
);
Send.displayName = "Send";
export { Send };
export default Send;
