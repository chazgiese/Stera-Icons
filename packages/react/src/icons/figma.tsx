import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FigmaIcon = memo(
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
          d="M15.335 1.25a4.084 4.084 0 0 1 2.357 7.416 4.085 4.085 0 1 1-4.941 6.495v3.505a4.084 4.084 0 0 1-8.167 0c0-1.376.682-2.593 1.726-3.333A4.08 4.08 0 0 1 4.584 12c0-1.377.682-2.594 1.726-3.334A4.083 4.083 0 0 1 8.667 1.25zm-6.68 14.833a2.584 2.584 0 1 0 2.596 2.583v-2.582H8.667zm6.68-6.666a2.583 2.583 0 1 0 0 5.166 2.583 2.583 0 0 0 0-5.166m-6.668 0a2.583 2.583 0 0 0-.013 5.166h2.597V9.417zm0-6.667a2.583 2.583 0 0 0 0 5.167h2.584V2.75zm4.085 5.167h2.583a2.584 2.584 0 0 0 0-5.167h-2.583z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FigmaIcon.displayName = "FigmaIcon";
export { FigmaIcon };
