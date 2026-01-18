import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CodeIconDuotone = memo(
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
          d="M13.784 3.776a.75.75 0 0 1 1.432.447l-5 16a.75.75 0 0 1-1.432-.447z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M5.97 6.97a.75.75 0 1 1 1.06 1.06L3.06 12l3.97 3.97a.75.75 0 0 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06zM16.97 6.97a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06L20.94 12l-3.97-3.97a.75.75 0 0 1 0-1.06"
        />
      </svg>
    ))
);
CodeIconDuotone.displayName = "CodeIconDuotone";
export { CodeIconDuotone };
