import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArchwayIconFilltone = memo(
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
          d="M12 1a9 9 0 0 1 9 9v12a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1V10a9 9 0 0 1 9-9"
          opacity={0.4}
        />
        <path fill="currentColor" d="M20 21a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2z" />
      </svg>
    ))
);
ArchwayIconFilltone.displayName = "ArchwayIconFilltone";
export { ArchwayIconFilltone };
