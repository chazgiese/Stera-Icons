import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LineWeightIconDuotone = memo(
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
          fillRule="evenodd"
          d="M19 7c.966 0 1.75.784 1.75 1.75v1.5A1.75 1.75 0 0 1 19 12H5a1.75 1.75 0 0 1-1.75-1.75v-1.5C3.25 7.784 4.034 7 5 7zM5 8.5a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h14a.25.25 0 0 0 .25-.25v-1.5A.25.25 0 0 0 19 8.5z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M18.75 14.25a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2H5.25a2 2 0 0 1-2-2v-2.5a2 2 0 0 1 2-2zm-13.5 1.5a.5.5 0 0 0-.5.5v2.5a.5.5 0 0 0 .5.5h13.5a.5.5 0 0 0 .5-.5v-2.5a.5.5 0 0 0-.5-.5z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M20 3.25a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
LineWeightIconDuotone.displayName = "LineWeightIconDuotone";
export { LineWeightIconDuotone };
