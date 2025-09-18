import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartPieFilled = memo(
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
          d="M11 10a3 3 0 0 0 3 3h8.952C22.447 18.606 17.738 23 12 23 5.925 23 1 18.075 1 12 1 6.262 5.394 1.552 11 1.047z"
        />
        <path
          fill="currentColor"
          d="M13.807 1.15a11 11 0 0 1 1.153.256l.11.03a11 11 0 0 1 2.09.85l.031.015q.436.234.848.507.273.178.532.37a11 11 0 0 1 2.25 2.25q.059.082.116.164a11 11 0 0 1 1.625 3.338 10 10 0 0 1 .133.504q.09.374.154.758c.049.363-.251.808-.849.808h-8a1 1 0 0 1-1-1V2c0-.597.444-.898.807-.85"
        />
      </svg>
    ))
);
ChartPieFilled.displayName = "ChartPieFilled";
export { ChartPieFilled };
