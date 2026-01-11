import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronFullCircleUpIconFillDuotone = memo(
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
          d="M11.024 8.369a1.25 1.25 0 0 1 1.953 0l3.48 4.35c.654.818.07 2.03-.977 2.03H8.52c-1.047 0-1.63-1.212-.976-2.03z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m.977 7.37a1.25 1.25 0 0 0-1.954 0l-3.479 4.349c-.655.818-.072 2.031.977 2.031h6.958c1.049 0 1.632-1.213.977-2.031z"
          clipRule="evenodd"
          opacity={0.4}
        />
      </svg>
    ))
);
ChevronFullCircleUpIconFillDuotone.displayName =
  "ChevronFullCircleUpIconFillDuotone";
export { ChevronFullCircleUpIconFillDuotone };
