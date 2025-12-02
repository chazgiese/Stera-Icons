import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MoonCrescentIcon = memo(
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
          d="M8.892 1.708a.75.75 0 0 1 .883 1.062 9.25 9.25 0 0 0 10.898 13.086.75.75 0 0 1 .885 1.061A10.75 10.75 0 0 1 12 22.75C6.063 22.75 1.25 17.937 1.25 12c0-4.857 3.221-8.958 7.642-10.292M7.739 3.79A9.25 9.25 0 0 0 12 21.25a9.23 9.23 0 0 0 7.305-3.582c-.428.052-.862.082-1.304.082-5.937 0-10.75-4.813-10.75-10.75 0-1.118.172-2.196.49-3.21"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MoonCrescentIcon.displayName = "MoonCrescentIcon";
export { MoonCrescentIcon };
