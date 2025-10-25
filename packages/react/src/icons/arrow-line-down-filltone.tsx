import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLineDownIconFilltone = memo(
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
          d="M20 20a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 2a1 1 0 0 1 1 1v6.25h4.72c1.14 0 1.712 1.38.906 2.185l-5.721 5.72c-.5.5-1.31.5-1.81 0l-5.721-5.72c-.806-.806-.235-2.184.905-2.185h4.72V3a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
ArrowLineDownIconFilltone.displayName = "ArrowLineDownIconFilltone";
export { ArrowLineDownIconFilltone };
