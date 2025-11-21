import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PoundSterlingIcon = memo(
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
          d="M12.015 2.154c2.313-.345 4.98.711 6.629 3.46a.75.75 0 0 1-1.288.772c-1.35-2.251-3.434-3-5.12-2.748C10.546 3.89 9.25 5.12 9.25 7v4.25H14a.75.75 0 0 1 0 1.5H9.25V17c0 1.419-.868 2.515-1.704 3.25H19a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.296-1.44l.004-.001.022-.01.096-.045a8.11 8.11 0 0 0 1.46-.906c.83-.651 1.464-1.458 1.464-2.348v-4.25H5a.75.75 0 0 1 0-1.5h2.75V7c0-2.73 1.953-4.5 4.265-4.846"
        />
      </svg>
    ))
);
PoundSterlingIcon.displayName = "PoundSterlingIcon";
export { PoundSterlingIcon };
