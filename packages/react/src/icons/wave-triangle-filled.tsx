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
          d="M4.673 3.784c1.07-1.711 3.586-1.711 4.655 0l.101.177 3.897 7.335q.002.006.006.013L17 18.214l3.676-6.918a1.5 1.5 0 0 1 2.649 1.408l-3.896 7.332-.102.176c-1.07 1.711-3.584 1.711-4.653 0l-.102-.176-3.893-7.326-.004-.007-3.674-6.92-3.675 6.92a1.5 1.5 0 0 1-2.65-1.407L4.571 3.96z"
        />
      </svg>
    ))
);
WaveTriangleIconFilled.displayName = "WaveTriangleIconFilled";
export { WaveTriangleIconFilled };
