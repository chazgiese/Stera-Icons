import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AstriskIcon = memo(
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
          d="M12 1.25a.75.75 0 0 1 .75.75v8.697l7.538-4.351a.75.75 0 0 1 .75 1.3l-7.532 4.348 7.537 4.352a.751.751 0 0 1-.75 1.3L12.75 13.29V22a.75.75 0 0 1-1.5 0v-8.704l-7.532 4.35a.75.75 0 0 1-.75-1.3l7.537-4.353-7.532-4.347a.751.751 0 0 1 .75-1.3l7.527 4.345V2a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
AstriskIcon.displayName = "AstriskIcon";
export { AstriskIcon };
