import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AwardStar = memo(
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
          d="M11.064 1.762c.427-.682 1.444-.682 1.871 0l.082.156 1.433 3.314 3.61.334c.963.09 1.363 1.29.627 1.934l-2.72 2.381.795 3.517c.216.954-.816 1.687-1.645 1.197l-2.367-1.4v4.055H13A3.75 3.75 0 0 1 16.75 21v.25h.75a.75.75 0 1 1 0 1.5h-11a.75.75 0 0 1 0-1.5h.75V21A3.75 3.75 0 0 1 11 17.25h.25v-4.056l-2.367 1.4c-.83.492-1.862-.241-1.646-1.196l.795-3.518L5.313 7.5c-.736-.644-.336-1.845.628-1.934l3.609-.334 1.432-3.314zM11 18.75A2.25 2.25 0 0 0 8.75 21v.25h6.5V21A2.25 2.25 0 0 0 13 18.75zm-.166-12.709a1.11 1.11 0 0 1-.915.663l-2.93.27 2.208 1.932c.305.267.441.68.352 1.077L8.9 12.842l2.535-1.5.134-.067a1.1 1.1 0 0 1 .861 0l.135.068 2.533 1.498-.646-2.858c-.09-.397.046-.81.35-1.077l2.207-1.932-2.927-.27a1.11 1.11 0 0 1-.916-.663L12 3.344z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
AwardStar.displayName = "AwardStar";
export { AwardStar };
