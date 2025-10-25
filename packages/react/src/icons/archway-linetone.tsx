import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArchwayIconLinetone = memo(
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
          d="M19.83 21.828A4 4 0 0 1 17 23H7a4 4 0 0 1-2.828-1.172l1.414-1.414c.363.363.862.586 1.414.586h10c.552 0 1.051-.223 1.414-.586z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 1a9 9 0 0 1 9 9v9a4 4 0 0 1-1.172 2.828l-1.414-1.414A2 2 0 0 0 19 19v-9a7 7 0 1 0-14 0v9c0 .553.223 1.051.586 1.414l-1.414 1.414A4 4 0 0 1 3 19v-9a9 9 0 0 1 9-9"
        />
      </svg>
    ))
);
ArchwayIconLinetone.displayName = "ArchwayIconLinetone";
export { ArchwayIconLinetone };
