import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RobotHumanoidIconBold = memo(
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
          d="M10 9a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1M14 9a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 2a1 1 0 0 1 1 1v1.072a7 7 0 0 1 5.715 4.95q.14-.02.285-.022a2 2 0 1 1 0 4 7 7 0 0 1-3.901 6.276l.37 1.482A1 1 0 0 1 14.5 22h-5a1 1 0 0 1-.97-1.242l.37-1.482A7 7 0 0 1 5 13a2 2 0 1 1 .284-3.978A7.01 7.01 0 0 1 11 4.072V3a1 1 0 0 1 1-1m0 4a5 5 0 0 0-5 5v2a5 5 0 0 0 10 0v-2a5 5 0 0 0-5-5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
RobotHumanoidIconBold.displayName = "RobotHumanoidIconBold";
export { RobotHumanoidIconBold };
