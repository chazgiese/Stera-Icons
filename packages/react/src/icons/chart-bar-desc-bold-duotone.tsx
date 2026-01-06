import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBarDescIconBoldDuotone = memo(
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
          d="M4.25 3A2.25 2.25 0 0 0 2 5.25V19h2V5.25A.25.25 0 0 1 4.25 5h3.5a.25.25 0 0 1 .25.25V19h2V9.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25V19h2v-5.75a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25V19h2v-5.75A2.25 2.25 0 0 0 19.75 11h-3.5q-.127 0-.25.015V9.25A2.25 2.25 0 0 0 13.75 7h-3.5q-.127 0-.25.015V5.25A2.25 2.25 0 0 0 7.75 3z"
          opacity={0.4}
        />
        <path fill="currentColor" d="M2 19a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2z" />
      </svg>
    ))
);
ChartBarDescIconBoldDuotone.displayName = "ChartBarDescIconBoldDuotone";
export { ChartBarDescIconBoldDuotone };
