import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBarRowIconDuotone = memo(
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
          d="M18.75 2.25a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-7.065a2 2 0 0 1 .065.5v3.5a2 2 0 0 1-.065.5h3.065a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-10v-1.5h10a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5h-10v-1.5h5a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5h-5v-1.5h14a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5h-14v-1.5z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M4 1.25a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 4 1.25"
        />
      </svg>
    ))
);
ChartBarRowIconDuotone.displayName = "ChartBarRowIconDuotone";
export { ChartBarRowIconDuotone };
