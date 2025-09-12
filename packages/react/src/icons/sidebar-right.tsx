const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const SidebarRight = memo(
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
          d: "M8.4 3c-1.103 0-1.991-.001-2.709.058-.728.06-1.368.185-1.96.487A5 5 0 0 0 1.544 5.73c-.302.593-.428 1.233-.487 1.961C.999 8.41 1 9.297 1 10.401V13.6c0 1.103-.001 1.991.058 2.709.06.728.185 1.368.487 1.96a5 5 0 0 0 2.185 2.186c.593.302 1.233.428 1.961.487.718.059 1.606.058 2.71.058H16v-.002c.92 0 1.68-.004 2.309-.056.728-.06 1.368-.185 1.96-.487a5 5 0 0 0 2.186-2.185c.302-.593.428-1.233.487-1.961.059-.718.058-1.606.058-2.71V10.4c0-1.103.001-1.991-.058-2.709-.06-.728-.185-1.368-.487-1.96a5 5 0 0 0-2.185-2.186c-.593-.302-1.233-.428-1.961-.487C17.68 3.006 16.92 3.002 16 3zM14 19H8.4c-1.136 0-1.929 0-2.546-.05-.605-.05-.953-.143-1.216-.277a3 3 0 0 1-1.31-1.31c-.135-.264-.228-.612-.277-1.218C3 15.53 3 14.736 3 13.6v-3.2c0-1.136 0-1.929.05-2.546.05-.605.143-.953.277-1.216a3 3 0 0 1 1.31-1.31c.264-.135.612-.228 1.217-.277C6.471 5 7.264 5 8.4 5H14zm2-13.999c.927 0 1.604.006 2.145.05.606.05.954.142 1.217.276a3 3 0 0 1 1.31 1.31c.135.264.228.612.277 1.217.05.617.051 1.41.051 2.546v3.2c0 1.136 0 1.929-.05 2.545-.05.606-.143.954-.277 1.217a3 3 0 0 1-1.31 1.31c-.264.135-.612.228-1.218.277-.541.044-1.218.048-2.145.049z",
          clipRule: "evenodd",
        }),
      }))
);
SidebarRight.displayName = "SidebarRight";
export { SidebarRight };
