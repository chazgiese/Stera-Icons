import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartPieAltIconBold = memo(
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
          d="M7.6 1.916a1 1 0 1 1 .8 1.832A9 9 0 0 0 3 12a9 9 0 0 0 9 9c1.162 0 2.27-.22 3.286-.618a1 1 0 0 1 .73 1.861A11 11 0 0 1 12 23C5.925 23 1 18.075 1 12 1 7.488 3.717 3.613 7.6 1.916"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="m13.098 1.054.382.045a11.01 11.01 0 0 1 8.685 6.69A11 11 0 0 1 23 12a10.96 10.96 0 0 1-2.484 6.964c-.767.936-2.099.867-2.859.107l-6.364-6.364A1 1 0 0 1 11 12V3c0-1.008.786-1.941 1.876-1.955zm.667 11.297 5.265 5.265A8.96 8.96 0 0 0 21 12c0-.868-.126-1.706-.355-2.499zM13 10.503l6.88-2.85A9 9 0 0 0 13 3.055z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChartPieAltIconBold.displayName = "ChartPieAltIconBold";
export { ChartPieAltIconBold };
