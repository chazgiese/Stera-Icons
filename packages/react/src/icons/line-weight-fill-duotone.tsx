import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LineWeightIconFillDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M18.75 16a.25.25 0 0 1 .25.25v2.5a.25.25 0 0 1-.25.25H5.25a.25.25 0 0 1-.25-.25v-2.5a.25.25 0 0 1 .25-.25zM19 9v1H5V9z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M18.75 14A2.25 2.25 0 0 1 21 16.25v2.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75v-2.5A2.25 2.25 0 0 1 5.25 14zm-13.5 2a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h13.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25zM19 7a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zM5 10h14V9H5z"
          clipRule="evenodd"
        />
        <path fill="currentColor" d="M20 3a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2z" />
      </svg>
    ))
);
LineWeightIconFillDuotone.displayName = "LineWeightIconFillDuotone";
export { LineWeightIconFillDuotone };
