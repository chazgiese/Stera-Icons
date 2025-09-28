import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WaveSine = memo(
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
          d="M7 3.25c1.525 0 2.772 1.107 3.688 2.599.932 1.52 1.641 3.62 2.051 6.025.39 2.286 1.05 4.187 1.852 5.493.819 1.335 1.672 1.883 2.409 1.883s1.59-.548 2.41-1.883c.8-1.306 1.461-3.207 1.85-5.493a.75.75 0 1 1 1.48.252c-.41 2.405-1.12 4.505-2.052 6.025-.916 1.492-2.162 2.599-3.688 2.599-1.525 0-2.772-1.107-3.687-2.599-.933-1.52-1.642-3.62-2.052-6.025-.39-2.286-1.05-4.187-1.852-5.493C8.59 5.298 7.737 4.75 7 4.75s-1.59.548-2.41 1.883c-.8 1.306-1.46 3.207-1.85 5.493a.75.75 0 0 1-1.48-.252c.41-2.405 1.12-4.505 2.053-6.025C4.228 4.357 5.475 3.25 7 3.25"
        />
      </svg>
    ))
);
WaveSine.displayName = "WaveSine";
export { WaveSine };
