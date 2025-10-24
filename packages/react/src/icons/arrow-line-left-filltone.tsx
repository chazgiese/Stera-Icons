import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLineLeftIconFilltone = memo(
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
          d="M3 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M12.565 5.374c.806-.806 2.185-.235 2.185.905v4.72H21a1 1 0 0 1 0 2h-6.25v4.721c0 1.14-1.38 1.712-2.185.906l-5.72-5.721c-.5-.5-.5-1.31 0-1.81z"
        />
      </svg>
    ))
);
ArrowLineLeftIconFilltone.displayName = "ArrowLineLeftIconFilltone";
export { ArrowLineLeftIconFilltone };
