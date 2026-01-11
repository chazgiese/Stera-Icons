import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronFullCircleRightIconFillDuotone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m-.719 6.544c-.818-.655-2.031-.072-2.031.977v6.958c0 1.049 1.213 1.632 2.031.977l4.35-3.48c.625-.5.625-1.452 0-1.953z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M9.25 8.52c0-1.047 1.213-1.63 2.031-.976l4.35 3.48c.625.5.625 1.452 0 1.953l-4.35 3.48c-.818.654-2.03.07-2.031-.977z"
        />
      </svg>
    ))
);
ChevronFullCircleRightIconFillDuotone.displayName =
  "ChevronFullCircleRightIconFillDuotone";
export { ChevronFullCircleRightIconFillDuotone };
