import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleNotchIconFill = memo(
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
          d="M18.01 3.868a1.5 1.5 0 0 1 2.122 0A11.502 11.502 0 0 1 12 23.5 11.501 11.501 0 0 1 3.868 3.868 1.5 1.5 0 0 1 5.99 5.99 8.502 8.502 0 0 0 12 20.5a8.502 8.502 0 0 0 8.338-10.158A8.5 8.5 0 0 0 18.01 5.99a1.5 1.5 0 0 1 0-2.122"
        />
      </svg>
    ))
);
CircleNotchIconFill.displayName = "CircleNotchIconFill";
export { CircleNotchIconFill };
