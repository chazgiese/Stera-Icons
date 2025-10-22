import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const EmoteGrinIconFilled = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1M8 14a1 1 0 0 0-.8 1.6A6 6 0 0 0 12 18a6 6 0 0 0 4.8-2.4 1.002 1.002 0 0 0-.799-1.6zm.5-6.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m7 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
EmoteGrinIconFilled.displayName = "EmoteGrinIconFilled";
export { EmoteGrinIconFilled };
