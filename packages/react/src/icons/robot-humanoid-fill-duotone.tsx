import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RobotHumanoidIconFillDuotone = memo(
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
          d="M12 4.25A6.75 6.75 0 0 1 18.75 11v2a6.75 6.75 0 0 1-13.5 0v-2A6.75 6.75 0 0 1 12 4.25M10 9a1 1 0 0 0-1 1v1.5a1 1 0 1 0 2 0V10a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v1.5a1 1 0 1 0 2 0V10a1 1 0 0 0-1-1"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M15.47 20.758A1 1 0 0 1 14.5 22h-5a1 1 0 0 1-.97-1.242l.432-1.73A6.7 6.7 0 0 0 12 19.75a6.7 6.7 0 0 0 3.037-.723zM5 9q.276.002.53.073A6.8 6.8 0 0 0 5.25 11v1.981c-.082.01-.165.019-.25.019a2 2 0 1 1 0-4M19 9a2 2 0 1 1 0 4 2 2 0 0 1-.25-.019V11c0-.67-.1-1.316-.281-1.927.17-.046.347-.073.531-.073M10 9a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1M14 9a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1M12 2a1 1 0 0 1 1 1v1.324a6.8 6.8 0 0 0-2 0V3a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
RobotHumanoidIconFillDuotone.displayName = "RobotHumanoidIconFillDuotone";
export { RobotHumanoidIconFillDuotone };
