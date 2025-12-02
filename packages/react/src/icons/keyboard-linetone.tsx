import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const KeyboardIconLinetone = memo(
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
          d="M20 5a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a3 3 0 0 1-2.996-2.846L1 16V8a3 3 0 0 1 3-3zM4 7a1 1 0 0 0-1 1v8l.005.102A1 1 0 0 0 4 17h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M6.5 13a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2zM14.25 13a1 1 0 1 1 0 2h-4.5a1 1 0 1 1 0-2zM18.102 13.005a1 1 0 0 1 0 1.99l-.103.005H17.5a1 1 0 1 1 0-2h.499zM6.5 9a1 1 0 0 1 0 2H6a1 1 0 1 1 0-2zM10.25 9a1 1 0 1 1 0 2h-.5a1 1 0 1 1 0-2zM14.25 9a1 1 0 0 1 0 2h-.5a1 1 0 1 1 0-2zM18.001 9a1 1 0 0 1 0 2H17.5a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
KeyboardIconLinetone.displayName = "KeyboardIconLinetone";
export { KeyboardIconLinetone };
