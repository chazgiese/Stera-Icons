import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const EyeOffIcon = memo(
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
          d="M3.47 3.47a.75.75 0 0 1 1.06 0l16 16a.75.75 0 0 1-1.06 1.06l-16-16a.75.75 0 0 1 0-1.06M3.682 7.967a.75.75 0 0 1 1.102 1.016 11 11 0 0 0-1.968 3.018C4.454 15.717 7.967 18.25 12 18.25c.785 0 1.548-.096 2.28-.276a.75.75 0 0 1 .36 1.457c-.85.209-1.733.319-2.64.319-4.811 0-8.91-3.096-10.694-7.467a.75.75 0 0 1 0-.566 12.5 12.5 0 0 1 2.376-3.75M12 4.25c4.81 0 8.909 3.097 10.694 7.467a.75.75 0 0 1 0 .566 12.5 12.5 0 0 1-2.376 3.75.75.75 0 0 1-1.102-1.016 11 11 0 0 0 1.967-3.019C19.544 8.283 16.032 5.75 12 5.75c-.785 0-1.548.096-2.28.276a.75.75 0 0 1-.36-1.457c.849-.209 1.733-.319 2.64-.319"
        />
      </svg>
    ))
);
EyeOffIcon.displayName = "EyeOffIcon";
export { EyeOffIcon };
