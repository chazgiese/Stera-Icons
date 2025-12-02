import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ConnectionAltIconBold = memo(
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
          d="M6.5 13a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M6.5 2a4.5 4.5 0 0 1 4.498 4.43c.073 4.645 1.927 6.498 6.572 6.571A4.5 4.5 0 1 1 13 17.569c-.072-4.645-1.925-6.497-6.57-6.57A4.5 4.5 0 0 1 6.5 2m11 13a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M6.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M17.5 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ConnectionAltIconBold.displayName = "ConnectionAltIconBold";
export { ConnectionAltIconBold };
