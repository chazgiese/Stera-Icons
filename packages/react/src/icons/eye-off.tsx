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
          d="M3.47 3.47a.75.75 0 0 1 1.06 0l16 16a.75.75 0 0 1-1.06 1.06l-16-16a.75.75 0 0 1 0-1.06M3.682 7.967a.75.75 0 0 1 1.102 1.017A11 11 0 0 0 2.817 12c1.638 3.716 5.15 6.25 9.183 6.25a9.5 9.5 0 0 0 2.28-.277.75.75 0 0 1 .36 1.457c-.849.21-1.733.32-2.64.32-4.81 0-8.909-3.097-10.694-7.468a.75.75 0 0 1 0-.566 12.5 12.5 0 0 1 2.376-3.75M12 4.25c4.811 0 8.91 3.097 10.695 7.467a.75.75 0 0 1 0 .566 12.5 12.5 0 0 1-2.376 3.75.75.75 0 0 1-1.103-1.016 11 11 0 0 0 1.967-3.019C19.544 8.283 16.033 5.75 12 5.75c-.785 0-1.548.096-2.28.277a.75.75 0 0 1-.36-1.457c.85-.21 1.733-.32 2.64-.32"
        />
      </svg>
    ))
);
EyeOffIcon.displayName = "EyeOffIcon";
export { EyeOffIcon };
