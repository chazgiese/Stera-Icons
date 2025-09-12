const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ChatBubbleFilled = memo(
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
          d: "M12 2c5.409 0 10 3.922 10 9s-4.591 9-10 9c-1.04 0-2.046-.145-2.992-.411l-4.225 1.829a1 1 0 0 1-1.382-1.09c.085-.482.204-.97.303-1.4.103-.447.189-.848.233-1.23.088-.747.008-1.326-.366-1.851C2.581 14.454 2 12.79 2 11c0-5.078 4.591-9 10-9",
          clipRule: "evenodd",
        }),
      }))
);
ChatBubbleFilled.displayName = "ChatBubbleFilled";
export { ChatBubbleFilled };
