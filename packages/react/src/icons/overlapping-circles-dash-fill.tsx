import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const OverlappingCirclesDashIconFill = memo(
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
          d="M8.5 4.5a7.47 7.47 0 0 1 4.04 1.18 1 1 0 0 1 0 1.684 5.5 5.5 0 0 0-2.493 3.909v.007a5.6 5.6 0 0 0 0 1.44v.007a5.5 5.5 0 0 0 2.492 3.909 1 1 0 0 1 0 1.684A7.5 7.5 0 1 1 8.5 4.5M16.22 17.453a1 1 0 0 1 .259 1.983 7.6 7.6 0 0 1-1.957 0 1 1 0 0 1 .258-1.983 5.6 5.6 0 0 0 1.44 0M19.864 15.348a1 1 0 0 1 1.586 1.218c-.399.52-.864.985-1.384 1.384a1 1 0 0 1-1.218-1.586 5.6 5.6 0 0 0 1.016-1.016M21.815 10.16a1 1 0 0 1 1.121.861 7.6 7.6 0 0 1 0 1.957 1 1 0 0 1-1.983-.258 5.6 5.6 0 0 0 0-1.44 1 1 0 0 1 .862-1.12M18.664 6.233a1 1 0 0 1 1.402-.183c.52.399.985.864 1.384 1.384a1 1 0 0 1-1.586 1.218 5.5 5.5 0 0 0-1.016-1.016 1 1 0 0 1-.184-1.403M15.5 4.5q.497 0 .979.063a1 1 0 0 1-.26 1.984 5.6 5.6 0 0 0-1.439 0 1 1 0 0 1-.258-1.984q.48-.062.978-.063"
        />
      </svg>
    ))
);
OverlappingCirclesDashIconFill.displayName = "OverlappingCirclesDashIconFill";
export { OverlappingCirclesDashIconFill };
