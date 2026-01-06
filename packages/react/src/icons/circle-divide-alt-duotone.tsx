import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleDivideAltIconDuotone = memo(
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
          d="M22.75 12c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12 6.063 1.25 12 1.25 22.75 6.063 22.75 12m-1.5 0a9.25 9.25 0 1 0-18.5 0 9.25 9.25 0 0 0 18.5 0"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M21.25 12q-.001.38-.032.75H2.783A9 9 0 0 1 2.75 12q.002-.379.033-.75h18.435q.031.37.032.75"
        />
      </svg>
    ))
);
CircleDivideAltIconDuotone.displayName = "CircleDivideAltIconDuotone";
export { CircleDivideAltIconDuotone };
