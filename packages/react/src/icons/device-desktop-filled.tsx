const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const DeviceDesktopFilled = memo(
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
          d: "M19.786 2.002q.188.002.353.015c.228.018.498.063.77.2.328.169.604.424.796.737l.077.138.087.203c.072.2.1.395.114.566.018.217.017.475.017.739v9.8c0 .264.001.522-.017.739a2 2 0 0 1-.2.77 2 2 0 0 1-.875.873 2 2 0 0 1-.77.201c-.216.018-.474.017-.738.017h-3.327c.142 1.089.46 2.299.682 3.057.279.95-.423 1.943-1.448 1.943H8.693c-1.025 0-1.727-.992-1.448-1.943.222-.758.54-1.968.682-3.057H4.6c-.264 0-.522.001-.739-.017a2 2 0 0 1-.77-.2 2 2 0 0 1-.873-.875 2 2 0 0 1-.201-.77C1.999 14.923 2 14.665 2 14.4V4.6c0-.264-.001-.522.017-.739.018-.228.063-.498.2-.77a2 2 0 0 1 .875-.873c.271-.138.54-.183.77-.201C4.077 1.999 4.335 2 4.6 2h14.8zM9.938 17c-.116 1.06-.38 2.181-.601 3h5.326c-.22-.819-.485-1.94-.601-3z",
          clipRule: "evenodd",
        }),
      }))
);
DeviceDesktopFilled.displayName = "DeviceDesktopFilled";
export { DeviceDesktopFilled };
export default DeviceDesktopFilled;
