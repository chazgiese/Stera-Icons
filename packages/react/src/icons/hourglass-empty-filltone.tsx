import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HourglassEmptyIconFilltone = memo(
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
          d="M17 1a3 3 0 0 1 3 3v1.116a7 7 0 0 1-2.627 5.466l-1.284 1.027a.5.5 0 0 0 0 .782l1.284 1.027A7 7 0 0 1 20 18.884V20a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1.116a7 7 0 0 1 2.627-5.466l1.284-1.027a.5.5 0 0 0 0-.782l-1.284-1.027A7 7 0 0 1 4 5.116V4a3 3 0 0 1 3-3z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 13.911c.383 0 .814.129 1.15.44l.139.146.192.215c.464.49 1.029.897 1.705 1.438a3.5 3.5 0 0 1 1.272 2.197 1 1 0 0 1-.988 1.153H8.53a1 1 0 0 1-.988-1.153 3.5 3.5 0 0 1 1.271-2.197c.773-.618 1.401-1.061 1.898-1.653l.139-.145c.336-.312.767-.44 1.15-.44"
        />
      </svg>
    ))
);
HourglassEmptyIconFilltone.displayName = "HourglassEmptyIconFilltone";
export { HourglassEmptyIconFilltone };
