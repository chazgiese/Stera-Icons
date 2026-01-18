import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AngleObtuseIcon = memo(
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
          d="M21.398 14.163a.75.75 0 0 1 .92.531l.002.011a.75.75 0 0 1-1.45.387l-.002-.01a.75.75 0 0 1 .53-.919M20.016 11.346a.75.75 0 0 1 1.024.272l.006.01a.75.75 0 0 1-1.299.75l-.005-.008a.75.75 0 0 1 .274-1.024M17.951 8.98a.75.75 0 0 1 1.06 0l.009.008a.75.75 0 1 1-1.062 1.06l-.007-.006a.75.75 0 0 1 0-1.062M15.347 7.228a.75.75 0 0 1 1.025-.274l.01.006a.75.75 0 0 1-.752 1.298l-.009-.005a.75.75 0 0 1-.274-1.025M4.042 6.725a.75.75 0 0 1 .702 1.326l-.008.004a.75.75 0 1 1-.703-1.326zM12.377 6.21a.75.75 0 0 1 .918-.53l.01.003a.751.751 0 0 1-.387 1.449l-.01-.002a.75.75 0 0 1-.531-.92M6.934 5.621a.75.75 0 0 1 .359 1.456l-.009.003a.75.75 0 0 1-.36-1.456zM10.006 5.25a.75.75 0 0 1-.001 1.5h-.01a.75.75 0 0 1 0-1.5zM1.503 8.493a.75.75 0 0 1 1.06.06l7.772 8.697H22a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1-.56-.25L1.443 9.553a.75.75 0 0 1 .06-1.06"
        />
      </svg>
    ))
);
AngleObtuseIcon.displayName = "AngleObtuseIcon";
export { AngleObtuseIcon };
