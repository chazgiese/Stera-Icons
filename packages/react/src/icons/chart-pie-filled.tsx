import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartPieIconFilled = memo(
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
          d="M11 10.75A2.25 2.25 0 0 0 13.25 13h9.703C22.448 18.606 17.738 23 12 23 5.925 23 1 18.075 1 12 1 6.262 5.394 1.552 11 1.047z"
        />
        <path
          fill="currentColor"
          d="M13 1.047A11 11 0 0 1 22.953 11H13.25a.25.25 0 0 1-.25-.25z"
        />
      </svg>
    ))
);
ChartPieIconFilled.displayName = "ChartPieIconFilled";
export { ChartPieIconFilled };
