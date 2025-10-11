import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const StarHalfIconFilled = memo(
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
          d="M6.97 21.78 12 18.806V1c-.584 0-1.167.316-1.44.945L8.249 7.293l-5.824.538c-1.364.126-1.93 1.826-.889 2.737l4.392 3.842-1.285 5.678c-.306 1.35 1.154 2.386 2.328 1.692"
        />
      </svg>
    ))
);
StarHalfIconFilled.displayName = "StarHalfIconFilled";
export { StarHalfIconFilled };
