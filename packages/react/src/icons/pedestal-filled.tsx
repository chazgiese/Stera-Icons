const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const PedestalFilled = memo(
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
          d: "M19.786 2.002q.188.002.353.015c.228.018.498.063.77.2.328.169.604.424.796.737l.077.138.087.203c.072.2.1.395.114.566.018.217.017.475.017.739v1.8c0 .264.001.522-.017.739a2 2 0 0 1-.2.77 2 2 0 0 1-.875.873 2 2 0 0 1-.77.201q-.146.01-.314.013c.112.314.176.651.176 1.004a3 3 0 0 1-2.02 2.833q.002.015.003.028c.018.217.017.475.017.739V21a1 1 0 0 1-1 1h-1.75v-7a1 1 0 1 0-2 0v7h-2.5v-7a1 1 0 1 0-2 0v7H7a1 1 0 0 1-1-1v-7.4c0-.264-.001-.522.017-.739q0-.015.003-.028a3 3 0 0 1-1.845-3.837 5 5 0 0 1-.314-.013 2 2 0 0 1-.77-.2 2 2 0 0 1-.873-.875 2 2 0 0 1-.201-.77C1.999 6.923 2 6.665 2 6.4V4.6c0-.264-.001-.522.017-.739.018-.228.063-.498.2-.77a2 2 0 0 1 .875-.873c.271-.138.54-.183.77-.201C4.077 1.999 4.335 2 4.6 2h14.8zM7 9a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2z",
          clipRule: "evenodd",
        }),
      }))
);
PedestalFilled.displayName = "PedestalFilled";
export { PedestalFilled };
