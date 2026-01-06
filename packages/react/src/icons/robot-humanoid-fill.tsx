import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RobotHumanoidIconFill = memo(
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
          d="M12 2a1 1 0 0 1 1 1v1.324a6.76 6.76 0 0 1 5.469 4.75Q18.724 9.001 19 9a2 2 0 1 1 0 4 2 2 0 0 1-.25-.019V13a6.75 6.75 0 0 1-3.713 6.027l.433 1.73A1 1 0 0 1 14.5 22h-5a1 1 0 0 1-.97-1.242l.432-1.73A6.75 6.75 0 0 1 5.25 13v-.019c-.082.01-.165.019-.25.019a2 2 0 1 1 .53-3.927A6.76 6.76 0 0 1 11 4.324V3a1 1 0 0 1 1-1m-2 7a1 1 0 0 0-1 1v1.5a1 1 0 1 0 2 0V10a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v1.5a1 1 0 1 0 2 0V10a1 1 0 0 0-1-1"
          clipRule="evenodd"
        />
      </svg>
    ))
);
RobotHumanoidIconFill.displayName = "RobotHumanoidIconFill";
export { RobotHumanoidIconFill };
