import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const ChatBoxDots = memo(
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
            d: "M7.5 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.5 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M14.6 2c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487a5 5 0 0 1 2.186 2.185c.302.593.428 1.233.487 1.961.059.718.058 1.606.058 2.71V11c0 .918 0 1.657-.04 2.257-.042.609-.13 1.146-.34 1.656a5 5 0 0 1-2.707 2.706c-.51.211-1.047.3-1.656.341-.532.036-1.174.038-1.953.038l-4.972 3.316C9.335 21.978 8 21.264 8 20.065v-2.07c-.476-.004-.892-.01-1.257-.035-.608-.042-1.146-.13-1.656-.34a5 5 0 0 1-2.706-2.707c-.211-.51-.3-1.047-.341-1.656C2 12.657 2 11.918 2 11V9.4c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96A5 5 0 0 1 4.73 2.544c.593-.302 1.233-.428 1.961-.487C7.41 1.999 8.297 2 9.401 2zM9.4 4c-1.136 0-1.929 0-2.546.05-.605.05-.953.143-1.216.277a3 3 0 0 0-1.31 1.31c-.135.264-.228.612-.277 1.217C4 7.471 4 8.264 4 9.4V11c0 .945.001 1.604.036 2.12.035.507.1.803.193 1.028a3 3 0 0 0 1.623 1.624c.225.093.521.157 1.028.192.516.035 1.175.036 2.12.036a1 1 0 0 1 1 1v2.13l4.445-2.962A1 1 0 0 1 15 16c.945 0 1.604-.001 2.12-.036.507-.035.803-.1 1.028-.193a3 3 0 0 0 1.624-1.623c.093-.225.157-.521.192-1.028.035-.516.036-1.175.036-2.12V9.4c0-1.136 0-1.929-.05-2.546-.05-.605-.143-.953-.277-1.216a3 3 0 0 0-1.31-1.31c-.264-.135-.612-.228-1.218-.277C16.53 4 15.736 4 14.6 4z",
            clipRule: "evenodd",
          }),
        ],
      }))
);
ChatBoxDots.displayName = "ChatBoxDots";
export { ChatBoxDots };
export default ChatBoxDots;
