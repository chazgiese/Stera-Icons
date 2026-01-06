import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const EmoteFrownIconFillDuotone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 12.5a6 6 0 0 0-4.8 2.4 1 1 0 0 0 1.6 1.2 4 4 0 0 1 3.2-1.6c1.308 0 2.47.627 3.201 1.6a1 1 0 0 0 1.6-1.2A6 6 0 0 0 12 13.5M8.5 7.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m7 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 13.5c1.963 0 3.708.944 4.8 2.4a1.001 1.001 0 0 1-1.599 1.2A4 4 0 0 0 12 15.5a4 4 0 0 0-3.2 1.6 1 1 0 0 1-1.6-1.2 6 6 0 0 1 4.8-2.4M8.5 7.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M15.5 7.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5"
        />
      </svg>
    ))
);
EmoteFrownIconFillDuotone.displayName = "EmoteFrownIconFillDuotone";
export { EmoteFrownIconFillDuotone };
