import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronFullRightIcon = memo(
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
          d="M8.713 4.306a.75.75 0 0 1 .817.163l7 7a.75.75 0 0 1 0 1.061l-7 7A.75.75 0 0 1 8.25 19V5c0-.303.183-.578.463-.694M9.75 17.19 14.94 12 9.75 6.81z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChevronFullRightIcon.displayName = "ChevronFullRightIcon";
export { ChevronFullRightIcon };
