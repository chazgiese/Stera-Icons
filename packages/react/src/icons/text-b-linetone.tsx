import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextBIconLinetone = memo(
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
          d="M7 22H6a1 1 0 0 1-.995-.898L5 21V3a1 1 0 0 1 1-1c.552 0 1 .002 1 .002z"
          clipRule="evenodd"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M12.5 2a5.5 5.5 0 0 1 3.927 9.348A5.501 5.501 0 0 1 14.5 22H7v-2h7.5a3.5 3.5 0 1 0 0-7H7v-2h5.5a3.5 3.5 0 1 0 0-7H7V2z"
        />
      </svg>
    ))
);
TextBIconLinetone.displayName = "TextBIconLinetone";
export { TextBIconLinetone };
