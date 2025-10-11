import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LinkIcon = memo(
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
          d="M10.535 7.085a.75.75 0 0 1 .577 1.384 4.907 4.907 0 0 0-1.581 8l3 3a4.907 4.907 0 0 0 7.021-6.854.75.75 0 0 1 1.086-1.035 6.407 6.407 0 0 1-9.168 8.95l-3-3a6.407 6.407 0 0 1 2.065-10.445"
        />
        <path
          fill="currentColor"
          d="M3.47 3.47a6.407 6.407 0 0 1 9.06 0l3 3a6.407 6.407 0 0 1-2.067 10.446.75.75 0 0 1-.576-1.385 4.908 4.908 0 0 0 1.583-8l-3-3a4.907 4.907 0 0 0-7.02 6.857.75.75 0 0 1-1.083 1.036A6.406 6.406 0 0 1 3.47 3.47"
        />
      </svg>
    ))
);
LinkIcon.displayName = "LinkIcon";
export { LinkIcon };
