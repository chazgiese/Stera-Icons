const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const AiFilled = memo(
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
            d: "M9.648 9.705c.314.614.648 1.431.971 2.295H8.381c.323-.864.657-1.681.97-2.295q.078-.153.149-.278.071.125.148.278",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M14 3c1.383 0 2.481 0 3.365.071.896.073 1.66.227 2.359.583a6 6 0 0 1 2.622 2.622c.356.7.51 1.463.583 2.359C23 9.519 23 10.617 23 12s0 2.481-.071 3.365c-.073.896-.227 1.66-.583 2.359a6 6 0 0 1-2.622 2.622c-.7.356-1.463.51-2.359.583C16.481 21 15.384 21 14 21h-4c-1.384 0-2.481 0-3.365-.071-.896-.073-1.66-.227-2.359-.583a6 6 0 0 1-2.622-2.622c-.356-.7-.51-1.463-.583-2.359C1 14.481 1 13.383 1 12s0-2.481.071-3.365c.073-.896.227-1.66.583-2.359a6 6 0 0 1 2.622-2.622c.7-.356 1.463-.51 2.359-.583C7.519 3 8.616 3 10 3zM9.5 7c-.36 0-.64.152-.816.28-.181.13-.33.29-.45.438-.238.297-.46.68-.664 1.077-.41.805-.828 1.851-1.197 2.862a70 70 0 0 0-1.227 3.71l-.079.259-.02.07-.005.017-.001.005-.001.002a1 1 0 0 0 1.92.56v-.005l.006-.016q.005-.022.02-.065l.074-.249A75 75 0 0 1 7.679 14h3.642a78 78 0 0 1 .62 1.945l.074.25.02.064.004.016.001.004a1.001 1.001 0 0 0 1.943-.46l-.023-.1-.001-.001-.001-.005-.005-.018-.02-.069-.079-.259a76 76 0 0 0-1.227-3.71c-.369-1.01-.786-2.057-1.197-2.862-.203-.398-.426-.78-.664-1.077a2.4 2.4 0 0 0-.45-.439 1.43 1.43 0 0 0-.685-.272zm7 0a1 1 0 0 0-1 1v8a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1",
            clipRule: "evenodd",
          }),
        ],
      }))
);
AiFilled.displayName = "AiFilled";
export { AiFilled };
export default AiFilled;
