import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleNotchIcon = memo(
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
          d="M18.542 4.399a.75.75 0 0 1 1.06 0 10.752 10.752 0 0 1-7.601 18.351 10.75 10.75 0 0 1-9.932-6.636A10.75 10.75 0 0 1 4.399 4.4a.75.75 0 0 1 1.06 1.06 9.25 9.25 0 1 0 13.083 0 .75.75 0 0 1 0-1.06"
        />
      </svg>
    ))
);
CircleNotchIcon.displayName = "CircleNotchIcon";
export { CircleNotchIcon };
