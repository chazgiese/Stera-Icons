import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LineWeightIconBoldDuotone = memo(
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
          d="M19 6.75a2 2 0 0 1 2 2v1.5a2 2 0 0 1-2 2H5a2 2 0 0 1-1.99-1.796L3 10.25v-1.5a2 2 0 0 1 2-2zm-14 3.5h14v-1.5H5z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M18.75 14A2.25 2.25 0 0 1 21 16.25v2.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75v-2.5A2.25 2.25 0 0 1 5.25 14zm-13.5 2a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h13.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25z"
          clipRule="evenodd"
        />
        <path fill="currentColor" d="M20 3a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2z" />
      </svg>
    ))
);
LineWeightIconBoldDuotone.displayName = "LineWeightIconBoldDuotone";
export { LineWeightIconBoldDuotone };
