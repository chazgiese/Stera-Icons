import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const EmoteSadIconFilled = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 12.5a5.98 5.98 0 0 0-3.6 1.2 1 1 0 0 0 1.2 1.6 3.98 3.98 0 0 1 2.4-.8c.902 0 1.732.298 2.4.8a1 1 0 0 0 1.202-1.6A5.98 5.98 0 0 0 12 13.5M8.5 7.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m7 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
EmoteSadIconFilled.displayName = "EmoteSadIconFilled";
export { EmoteSadIconFilled };
