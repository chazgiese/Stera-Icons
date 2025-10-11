import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MedalIconFilled = memo(
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
          d="M12 11a6 6 0 1 1 0 12 6 6 0 0 1 0-12M6.251 11.242l-1.813-.905c-.256-.128-.603-.288-.866-.556a2 2 0 0 1-.462-.747c-.091-.266-.107-.547-.109-.792V3.6c0-.264-.001-.522.017-.739.018-.228.063-.498.2-.77.193-.375.499-.682.875-.873.27-.138.541-.183.77-.201C5.078.999 5.337 1 5.6 1h.65zM18.401 1c.263 0 .522-.001.739.017.228.018.498.063.77.2.328.169.604.424.796.737l.077.138.087.203c.072.2.1.395.114.566.018.217.017.475.017.739v4.642c-.002.245-.018.526-.11.792-.096.28-.254.536-.461.747-.263.268-.61.428-.866.556l-1.813.905V1zM16.251 10.821A7.47 7.47 0 0 0 12 9.5a7.46 7.46 0 0 0-4.249 1.32V1h8.5z"
        />
      </svg>
    ))
);
MedalIconFilled.displayName = "MedalIconFilled";
export { MedalIconFilled };
