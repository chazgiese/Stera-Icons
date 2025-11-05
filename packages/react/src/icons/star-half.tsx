import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const StarHalfIcon = memo(
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
          d="M10.79 2.044c.443-1.026 1.87-1.058 2.374-.096l.046.096 2.37 5.484 5.972.552c1.148.106 1.622 1.534.748 2.299l-4.503 3.94 1.317 5.825c.256 1.133-.97 2.004-1.957 1.42L12 18.515l-5.157 3.05c-.988.584-2.214-.287-1.957-1.42l1.316-5.825L1.7 10.38c-.874-.765-.4-2.193.747-2.299l5.972-.552zM12 16.987c.175 0 .348.033.511.102l.16.08 4.885 2.889-1.248-5.515a1.32 1.32 0 0 1 .417-1.28l4.261-3.729-5.65-.521a1.32 1.32 0 0 1-1.088-.79L12 3.028z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
StarHalfIcon.displayName = "StarHalfIcon";
export { StarHalfIcon };
