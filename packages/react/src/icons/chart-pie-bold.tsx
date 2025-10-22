import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartPieIconBold = memo(
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
          d="M7.6 1.916a1 1 0 1 1 .8 1.832A9 9 0 0 0 3 12a9.003 9.003 0 0 0 17.252 3.6 1 1 0 1 1 1.832.8A11 11 0 0 1 12 23C5.925 23 1 18.075 1 12 1 7.488 3.717 3.613 7.6 1.916"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="m13.099 1.055.399.048a11 11 0 0 1 6.28 3.119 11 11 0 0 1 3.167 6.68C23.066 12.106 22.075 13 21 13h-8a2 2 0 0 1-2-2V3c0-1.007.785-1.942 1.876-1.955zM13 11h7.943a9 9 0 0 0-2.579-5.364A9 9 0 0 0 13 3.056z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChartPieIconBold.displayName = "ChartPieIconBold";
export { ChartPieIconBold };
