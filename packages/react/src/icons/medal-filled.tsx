import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MedalFilled = memo(
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
    ) => (
      <svg
        fill={color}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        ref={ref}
        {...props}
      >
        <path
          fill="currentColor"
          d="M12 11.25a5.75 5.75 0 1 1 0 11.5 5.75 5.75 0 0 1 0-11.5M18.401 1c.263 0 .522-.001.739.017.228.018.498.063.77.2.328.169.604.424.796.737l.077.138.087.203c.072.2.1.395.114.566.018.217.017.475.017.739v4.642c-.002.245-.018.526-.11.792-.096.28-.254.536-.461.747-.263.268-.61.428-.866.556l-2.42 1.208a8 8 0 0 0-.393-.348V1zM7.251 11.195a8 8 0 0 0-.396.349l-2.417-1.207c-.256-.128-.603-.288-.866-.556a2 2 0 0 1-.462-.747c-.091-.266-.107-.547-.109-.792V3.6c0-.264-.001-.522.017-.739.018-.228.063-.498.2-.77.192-.375.499-.682.875-.873.27-.138.541-.183.77-.201C5.078.999 5.337 1 5.6 1h1.65zM15.251 10.238A7.5 7.5 0 0 0 12 9.5a7.5 7.5 0 0 0-3.249.737V1h6.5z"
        />
      </svg>
    ))
);
MedalFilled.displayName = "MedalFilled";
export { MedalFilled };
