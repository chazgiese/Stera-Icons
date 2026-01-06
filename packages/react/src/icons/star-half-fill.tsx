import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const StarHalfIconFill = memo(
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
          d="M12 18.806 6.97 21.78c-1.174.694-2.634-.342-2.328-1.692l1.285-5.678-4.392-3.843c-1.04-.91-.475-2.61.889-2.736l5.824-.538 2.313-5.348C10.833 1.315 11.416 1 12 1z"
        />
      </svg>
    ))
);
StarHalfIconFill.displayName = "StarHalfIconFill";
export { StarHalfIconFill };
