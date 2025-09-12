import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const ChatBubbleDots = memo(
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
            d: "M7.5 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.5 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M12 2c5.409 0 10 3.922 10 9s-4.591 9-10 9c-1.03 0-2.024-.14-2.962-.401l-2.646 1.323c-1.529.764-3.249-.616-2.834-2.274L4 16.876l.027-.098.005-.021c-.011-.082-.077-.37-.46-.91C2.581 14.454 2 12.79 2 11c0-5.078 4.591-9 10-9m0 2c-4.532 0-8 3.241-8 7 0 1.347.435 2.61 1.201 3.688.722 1.016.894 1.776.82 2.327a2 2 0 0 1-.075.326l-.005.015v.005l-.444 1.772 3.001-1.5.089-.04c.212-.08.446-.088.664-.018.855.274 1.78.425 2.749.425 4.532 0 8-3.242 8-7s-3.468-7-8-7",
            clipRule: "evenodd",
          }),
        ],
      }))
);
ChatBubbleDots.displayName = "ChatBubbleDots";
export { ChatBubbleDots };
export default ChatBubbleDots;
