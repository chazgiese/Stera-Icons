import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLineUpIconFilltone = memo(
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
          d="M3 3a1 1 0 0 0 1 1h16a1 1 0 0 0 0-2H4a1 1 0 0 0-1 1"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M5.374 12.565c-.806.806-.235 2.185.905 2.186h4.72V21a1 1 0 0 0 2 0v-6.25h4.721c1.14 0 1.712-1.38.906-2.186l-5.721-5.72c-.5-.5-1.31-.5-1.81 0z"
        />
      </svg>
    ))
);
ArrowLineUpIconFilltone.displayName = "ArrowLineUpIconFilltone";
export { ArrowLineUpIconFilltone };
