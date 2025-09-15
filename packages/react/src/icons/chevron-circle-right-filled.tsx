import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronCircleRightFilled = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m-.793 5.793a1 1 0 1 0-1.414 1.414L13.586 12l-3.793 3.793a1 1 0 1 0 1.414 1.414l4.5-4.5a1 1 0 0 0 0-1.414z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChevronCircleRightFilled.displayName = "ChevronCircleRightFilled";
export { ChevronCircleRightFilled };
