import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WaveTriangleIconFilled = memo(
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
          d="M4.673 3.783c1.07-1.71 3.586-1.71 4.655 0l.101.177 3.897 7.335.005.014 3.67 6.904 3.675-6.918a1.5 1.5 0 0 1 2.649 1.408l-3.896 7.332-.102.177c-1.07 1.71-3.584 1.71-4.653 0l-.102-.177-3.893-7.326-.004-.007L7 5.782l-3.674 6.92a1.5 1.5 0 0 1-2.65-1.407L4.571 3.96z"
        />
      </svg>
    ))
);
WaveTriangleIconFilled.displayName = "WaveTriangleIconFilled";
export { WaveTriangleIconFilled };
