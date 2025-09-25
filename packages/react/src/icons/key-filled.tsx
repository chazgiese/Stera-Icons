import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const KeyFilled = memo(
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
          d="M12 1a6 6 0 0 1 2 11.657v2.636a.5.5 0 0 0 .146.354l.947.946a.5.5 0 0 1-.054.753l-1.078.808a.5.5 0 0 0-.054.753l.74.74a.5.5 0 0 1 0 .707l-2.293 2.293a.5.5 0 0 1-.707 0l-1.5-1.5a.5.5 0 0 1-.147-.354v-8.136A6.001 6.001 0 0 1 12 1m0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
          clipRule="evenodd"
        />
      </svg>
    ))
);
KeyFilled.displayName = "KeyFilled";
export { KeyFilled };
