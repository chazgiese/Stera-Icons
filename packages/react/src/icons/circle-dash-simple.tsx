import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleDashSimpleIcon = memo(
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
          d="M16.625 20.013a.75.75 0 0 1 .751 1.297A10.7 10.7 0 0 1 12 22.75c-1.957 0-3.794-.524-5.376-1.44a.75.75 0 1 1 .751-1.297A9.2 9.2 0 0 0 12 21.25c1.686 0 3.265-.45 4.625-1.237M2.69 6.624a.75.75 0 1 1 1.297.751A9.2 9.2 0 0 0 2.75 12c0 1.686.45 3.265 1.237 4.625a.75.75 0 0 1-1.298.751A10.7 10.7 0 0 1 1.25 12c0-1.957.524-3.794 1.44-5.376M20.286 6.35a.75.75 0 0 1 1.024.274A10.7 10.7 0 0 1 22.75 12c0 1.957-.524 3.794-1.44 5.376a.75.75 0 1 1-1.297-.751A9.2 9.2 0 0 0 21.25 12c0-1.686-.45-3.265-1.237-4.625a.75.75 0 0 1 .273-1.025M12 1.25c1.957 0 3.794.524 5.376 1.44a.75.75 0 1 1-.751 1.297A9.2 9.2 0 0 0 12 2.75c-1.686 0-3.265.45-4.625 1.237a.75.75 0 0 1-.751-1.298A10.7 10.7 0 0 1 12 1.25"
        />
      </svg>
    ))
);
CircleDashSimpleIcon.displayName = "CircleDashSimpleIcon";
export { CircleDashSimpleIcon };
