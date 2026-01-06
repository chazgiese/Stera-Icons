import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const KeyboardIconFill = memo(
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
          d="M20 5.5A2.5 2.5 0 0 1 22.5 8v8a2.5 2.5 0 0 1-2.5 2.5H4a2.5 2.5 0 0 1-2.487-2.244L1.5 16V8A2.5 2.5 0 0 1 4 5.5zM6 13a1 1 0 1 0 0 2h.5a1 1 0 1 0 0-2zm3.75 0a1 1 0 1 0 0 2h4.5a1 1 0 1 0 0-2zm7.75 0a1 1 0 1 0 0 2h.499l.103-.005a1 1 0 0 0 0-1.99L17.999 13zM6 9a1 1 0 0 0 0 2h.5a1 1 0 1 0 0-2zm3.75 0a1 1 0 0 0 0 2h.5a1 1 0 1 0 0-2zm4 0a1 1 0 1 0 0 2h.5a1 1 0 0 0 0-2zm3.75 0a1 1 0 1 0 0 2h.501a1 1 0 0 0 0-2z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
KeyboardIconFill.displayName = "KeyboardIconFill";
export { KeyboardIconFill };
