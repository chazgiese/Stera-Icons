import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RobotHumanoidIconBoldDuotone = memo(
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
          fillRule="evenodd"
          d="M12 4a7 7 0 0 1 7 7v2a7 7 0 1 1-14 0v-2a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5v2a5 5 0 0 0 10 0v-2a5 5 0 0 0-5-5"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M15.47 20.758A1 1 0 0 1 14.5 22h-5a1 1 0 0 1-.97-1.242l.37-1.482A7 7 0 0 0 12 20a7 7 0 0 0 3.099-.724zM5 9c.097 0 .191.01.284.022A7 7 0 0 0 5 11v2a2 2 0 1 1 0-4M19 9a2 2 0 1 1 0 4v-2c0-.687-.1-1.35-.285-1.978q.14-.02.285-.022M10 9a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1M14 9a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1M12 2a1 1 0 0 1 1 1v1.072a7 7 0 0 0-2 0V3a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
RobotHumanoidIconBoldDuotone.displayName = "RobotHumanoidIconBoldDuotone";
export { RobotHumanoidIconBoldDuotone };
