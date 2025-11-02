import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RobotHumanoidIcon = memo(
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
          d="M10 9.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V10a.75.75 0 0 1 .75-.75M14 9.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V10a.75.75 0 0 1 .75-.75"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 2.25a.75.75 0 0 1 .75.75v1.292a6.755 6.755 0 0 1 5.787 5.021A1.75 1.75 0 1 1 19 12.75q-.127-.002-.25-.02V13a6.75 6.75 0 0 1-3.943 6.138l.42 1.68a.75.75 0 0 1-.727.932h-5a.75.75 0 0 1-.728-.932l.42-1.68A6.75 6.75 0 0 1 5.25 13v-.27a2 2 0 0 1-.25.02 1.75 1.75 0 1 1 .462-3.437 6.76 6.76 0 0 1 5.788-5.021V3a.75.75 0 0 1 .75-.75m0 3.5A5.25 5.25 0 0 0 6.75 11v2a5.25 5.25 0 1 0 10.5 0v-2c0-2.9-2.35-5.25-5.25-5.25"
          clipRule="evenodd"
        />
      </svg>
    ))
);
RobotHumanoidIcon.displayName = "RobotHumanoidIcon";
export { RobotHumanoidIcon };
