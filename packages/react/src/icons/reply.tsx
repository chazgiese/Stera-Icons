const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const Reply = memo(
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
          d: "M10.293 3.293A1 1 0 0 1 12 4v4.514c3.274.085 5.79.625 7.49 2.187C21.381 12.442 22 15.201 22 19a1 1 0 0 1-1.914.406l-.008-.017-.056-.108a6 6 0 0 0-.26-.43 7.3 7.3 0 0 0-1.181-1.358C17.491 16.512 15.722 15.5 13 15.5h-1V20a1 1 0 0 1-1.707.707l-8-8a1 1 0 0 1 0-1.414zM4.414 12 10 17.586V14.5a1 1 0 0 1 1-1h2c3.187 0 5.384 1.172 6.799 2.403-.275-1.808-.831-2.964-1.663-3.73C16.878 11.018 14.734 10.5 11 10.5a1 1 0 0 1-1-1V6.414z",
          clipRule: "evenodd",
        }),
      }))
);
Reply.displayName = "Reply";
export { Reply };
export default Reply;
