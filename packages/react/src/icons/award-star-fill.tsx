import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AwardStarIconFill = memo(
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
          d="M11.064 1.762c.427-.682 1.444-.682 1.871 0l.082.156 1.433 3.314 3.61.334c.963.09 1.363 1.29.627 1.934l-2.72 2.381.795 3.517c.216.954-.816 1.687-1.645 1.197L13 13.342v3.908A3.75 3.75 0 0 1 16.75 21h.75a1 1 0 1 1 0 2h-11a1 1 0 0 1 0-2h.75A3.75 3.75 0 0 1 11 17.25v-3.908l-2.116 1.253c-.83.49-1.863-.242-1.647-1.197l.795-3.518L5.313 7.5c-.736-.644-.336-1.845.628-1.934l3.609-.334 1.432-3.314z"
        />
      </svg>
    ))
);
AwardStarIconFill.displayName = "AwardStarIconFill";
export { AwardStarIconFill };
