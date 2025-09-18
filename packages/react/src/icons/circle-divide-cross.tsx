import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleDivideCross = memo(
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
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m-9.217 11.5a9.246 9.246 0 0 0 8.467 8.467V12.75zm9.967 0v8.467a9.246 9.246 0 0 0 8.467-8.467zm0-1.5h8.467a9.25 9.25 0 0 0-8.467-8.468zm-1.5-8.468a9.25 9.25 0 0 0-8.467 8.468h8.467z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CircleDivideCross.displayName = "CircleDivideCross";
export { CircleDivideCross };
