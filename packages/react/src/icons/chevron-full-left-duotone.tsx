import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronFullLeftIconDuotone = memo(
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
          d="M15.737 4.867A1 1 0 0 1 15.75 5v14a.748.748 0 0 0-.22-.53l-1.28-1.28V6.81l1.28-1.28c.18-.18.25-.43.207-.663"
          opacity={0.4}
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="m15 5-7 7 7 7"
        />
      </svg>
    ))
);
ChevronFullLeftIconDuotone.displayName = "ChevronFullLeftIconDuotone";
export { ChevronFullLeftIconDuotone };
