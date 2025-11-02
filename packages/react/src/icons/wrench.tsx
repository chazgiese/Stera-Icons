import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WrenchIcon = memo(
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
          d="M9.635 4.328a7.1 7.1 0 0 1 6.606-1.9c1.035.237 1.197 1.455.57 2.082l-2.829 2.827.513 2.167 2.167.512 2.828-2.828c.588-.587 1.694-.482 2.026.386l.055.185.085.432a7.095 7.095 0 0 1-9.01 7.963l-4.601 4.602a3.395 3.395 0 0 1-4.8-4.801l4.6-4.602a7.1 7.1 0 0 1 1.79-7.025m5.763-.527a5.598 5.598 0 0 0-5.992 7.495.75.75 0 0 1-.174.792l-4.927 4.927a1.895 1.895 0 0 0 2.68 2.68l4.927-4.928.082-.071a.75.75 0 0 1 .71-.101A5.598 5.598 0 0 0 20.196 8.6l-2.77 2.772a.75.75 0 0 1-.702.199l-3.025-.715a.75.75 0 0 1-.557-.557l-.715-3.025a.75.75 0 0 1 .199-.703z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
WrenchIcon.displayName = "WrenchIcon";
export { WrenchIcon };
