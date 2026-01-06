import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartPieAltIconFill = memo(
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
          d="M21.624 9.097c.472-.196 1.014.056 1.123.555A11 11 0 0 1 23 12c0 3.037-1.232 5.789-3.222 7.778a1 1 0 0 1-1.414 0l-6.126-6.126a.446.446 0 0 1 .145-.727zM12 1c3.889 0 7.302 2.018 9.258 5.062.276.43.072.99-.4 1.187l-9.24 3.827a.447.447 0 0 1-.618-.413V2a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
ChartPieAltIconFill.displayName = "ChartPieAltIconFill";
export { ChartPieAltIconFill };
