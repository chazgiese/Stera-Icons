import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SoccerFieldIconBold = memo(
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
          d="M20 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm-7 5.646a3.501 3.501 0 0 1 0 6.708V19h7a1 1 0 0 0 1-1v-2h-2.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1H21V6a1 1 0 0 0-1-1h-7zM4 5a1 1 0 0 0-1 1v2h2.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3v2a1 1 0 0 0 1 1h7v-3.646a3.5 3.5 0 0 1 0-6.708V5zm-1 9h1.5v-4H3zm16.5 0H21v-4h-1.5zM12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SoccerFieldIconBold.displayName = "SoccerFieldIconBold";
export { SoccerFieldIconBold };
