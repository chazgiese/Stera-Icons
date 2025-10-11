import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowDownIcon = memo(
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
          d="M12 4.25a.75.75 0 0 1 .75.75v12.19l5.72-5.72a.75.75 0 1 1 1.06 1.06l-7 7a.75.75 0 0 1-1.06 0l-7-7a.75.75 0 1 1 1.06-1.06l5.72 5.72V5a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
ArrowDownIcon.displayName = "ArrowDownIcon";
export { ArrowDownIcon };
