const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const Pedestal = memo(
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
            fillRule: "evenodd",
            d: "M19 2c.334 0 .644 0 .902.02.237.02.496.06.757.172l.113.053.155.087c.352.216.64.526.828.897.152.298.202.598.225.869.02.258.02.569.02.902v1c0 .333 0 .644-.02.902a2.3 2.3 0 0 1-.225.87 2.25 2.25 0 0 1-.983.983 2.3 2.3 0 0 1-.87.224q-.04.003-.083.003a2.99 2.99 0 0 1-1.872 3.863q.022.129.033.253c.02.258.02.568.02.902v7a1 1 0 1 1-2 0v-7c0-.366 0-.581-.014-.74a1 1 0 0 0-.018-.13.25.25 0 0 0-.1-.099 1 1 0 0 0-.129-.017A10 10 0 0 0 15 13H9c-.366 0-.581 0-.74.014a1 1 0 0 0-.13.017.25.25 0 0 0-.099.1 1 1 0 0 0-.017.13C8 13.419 8 13.634 8 14v7a1 1 0 1 1-2 0v-7c0-.334 0-.644.02-.902q.01-.123.032-.253A3 3 0 0 1 4.18 8.982q-.042 0-.082-.003a2.3 2.3 0 0 1-.87-.224 2.25 2.25 0 0 1-.983-.984 2.3 2.3 0 0 1-.224-.869C1.999 6.644 2 6.333 2 6V5c0-.333 0-.644.02-.902a2.3 2.3 0 0 1 .225-.87l.087-.155a2.25 2.25 0 0 1 .897-.828l.112-.053c.26-.111.52-.152.757-.171C4.356 1.999 4.667 2 5 2zM7 9a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2zM5 4c-.366 0-.581 0-.74.014a1 1 0 0 0-.13.017.25.25 0 0 0-.099.1 1 1 0 0 0-.017.13C4 4.419 4 4.634 4 5v1c0 .366 0 .581.014.74a1 1 0 0 0 .017.128.25.25 0 0 0 .1.1 1 1 0 0 0 .13.018C4.419 7 4.634 7 5 7h14c.366 0 .581 0 .74-.014a1 1 0 0 0 .128-.018.25.25 0 0 0 .1-.1 1 1 0 0 0 .018-.129C20 6.581 20 6.366 20 6V5c0-.366 0-.581-.014-.74a1 1 0 0 0-.018-.13.25.25 0 0 0-.1-.099 1 1 0 0 0-.129-.017A10 10 0 0 0 19 4z",
            clipRule: "evenodd",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            d: "M10.25 14a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1M13.75 14a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1",
          }),
        ],
      }))
);
Pedestal.displayName = "Pedestal";
export { Pedestal };
export default Pedestal;
