import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PilcrowIcon = memo(
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
          d="M19 3.25a.75.75 0 0 1 0 1.5h-1.25V20a.75.75 0 0 1-1.5 0V4.75h-2.5V20a.75.75 0 0 1-1.5 0v-5.25H10a5.75 5.75 0 0 1 0-11.5zm-9 1.5a4.25 4.25 0 0 0 0 8.5h2.25v-8.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PilcrowIcon.displayName = "PilcrowIcon";
export { PilcrowIcon };
