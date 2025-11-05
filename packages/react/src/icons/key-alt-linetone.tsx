import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const KeyAltIconLinetone = memo(
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
          d="M17 6a6 6 0 1 1-5.196 9h-1.89l-1.207 1.207A1 1 0 0 1 7.2 16.1l-.807-1.079-.686.686a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414l2-2A1 1 0 0 1 4 9h7.804A6 6 0 0 1 17 6m0 2c-1.639 0-3.05.986-3.668 2.4a1 1 0 0 1-.916.6H4.414l-1 1L5 13.586l.793-.793A1 1 0 0 1 7.3 12.9l.809 1.077.684-.684A1 1 0 0 1 9.5 13h2.916a1 1 0 0 1 .916.6A4.002 4.002 0 0 0 21 12a4 4 0 0 0-4-4"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M18.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
      </svg>
    ))
);
KeyAltIconLinetone.displayName = "KeyAltIconLinetone";
export { KeyAltIconLinetone };
