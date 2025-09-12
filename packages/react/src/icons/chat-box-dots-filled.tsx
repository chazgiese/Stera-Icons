import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const ChatBoxDotsFilled = memo(
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
          d: "M14.6 2c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487a5 5 0 0 1 2.186 2.185c.302.593.428 1.233.487 1.961.059.718.058 1.606.058 2.71V11c0 .918 0 1.657-.04 2.257-.042.609-.13 1.146-.34 1.656a5 5 0 0 1-2.707 2.706c-.51.211-1.047.3-1.656.341-.532.036-1.174.038-1.953.038l-5.75 3.834A1 1 0 0 1 8 21v-3.005c-.476-.004-.892-.01-1.257-.035-.608-.042-1.146-.13-1.656-.34a5 5 0 0 1-2.706-2.707c-.211-.51-.3-1.047-.341-1.656C2 12.657 2 11.918 2 11V9.4c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96A5 5 0 0 1 4.73 2.544c.593-.302 1.233-.428 1.961-.487C7.41 1.999 8.297 2 9.401 2zM7.5 8.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m4.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m4.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3",
          clipRule: "evenodd",
        }),
      }))
);
ChatBoxDotsFilled.displayName = "ChatBoxDotsFilled";
export { ChatBoxDotsFilled };
export default ChatBoxDotsFilled;
