import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AstriskIconFillDuotone = memo(
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
          d="M12 .5A1.5 1.5 0 0 1 13.5 2v9.124l7.918 4.572a1.501 1.501 0 0 1-1.5 2.599l-7.913-4.57-7.912 4.57a1.5 1.5 0 0 1-1.5-2.599l7.907-4.565V2A1.5 1.5 0 0 1 12 .5"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M13.5 14.589V22a1.501 1.501 0 0 1-3 0v-7.407l1.505-.868zM2.049 6.246a1.5 1.5 0 0 1 2.049-.549L10.5 9.393v1.738l-1.495.862-6.407-3.698a1.5 1.5 0 0 1-.55-2.049M19.913 5.697a1.5 1.5 0 0 1 1.5 2.598l-6.407 3.698-1.506-.87V9.4z" />
        </g>
      </svg>
    ))
);
AstriskIconFillDuotone.displayName = "AstriskIconFillDuotone";
export { AstriskIconFillDuotone };
