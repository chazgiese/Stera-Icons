import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HomeHeartIconFilltone = memo(
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
          d="M8.93 3.12a5 5 0 0 1 6.14 0l5 3.89A5 5 0 0 1 22 10.955V17a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-6.044a5 5 0 0 1 1.93-3.947z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M13.904 9.75a2.336 2.336 0 0 1 2.346 2.326c0 .983-.534 1.746-.735 2.026-.979 1.357-2.341 2.287-3.36 3.094a.25.25 0 0 1-.31 0c-1.019-.807-2.381-1.737-3.36-3.094-.2-.28-.735-1.043-.735-2.026a2.336 2.336 0 0 1 2.346-2.326c.784 0 1.478.383 1.904.97a2.35 2.35 0 0 1 1.904-.97"
        />
      </svg>
    ))
);
HomeHeartIconFilltone.displayName = "HomeHeartIconFilltone";
export { HomeHeartIconFilltone };
