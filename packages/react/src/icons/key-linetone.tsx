import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const KeyIconLinetone = memo(
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
          fillRule="evenodd"
          d="M12 1a6 6 0 0 1 3 11.196v1.89l1.207 1.207A1 1 0 0 1 16.1 16.8l-1.079.807.686.686a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0l-2-2A1 1 0 0 1 9 20v-7.804A6 6 0 0 1 12 1m0 2a4 4 0 0 0-1.6 7.668 1 1 0 0 1 .6.916v8.002l1 1L13.586 19l-.793-.793A1 1 0 0 1 12.9 16.7l1.077-.808-.684-.685A1 1 0 0 1 13 14.5v-2.916a1 1 0 0 1 .6-.916A4.002 4.002 0 0 0 12 3"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
      </svg>
    ))
);
KeyIconLinetone.displayName = "KeyIconLinetone";
export { KeyIconLinetone };
