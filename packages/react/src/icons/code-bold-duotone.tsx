import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CodeIconBoldDuotone = memo(
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
          d="M13.545 3.702a1 1 0 0 1 1.91.596l-5 16a1 1 0 0 1-1.909-.596z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M5.793 6.793a1 1 0 1 1 1.414 1.414L3.414 12l3.793 3.793a1 1 0 0 1-1.414 1.414l-4.5-4.5a1 1 0 0 1 0-1.414zM16.793 6.793a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L20.586 12l-3.793-3.793a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
CodeIconBoldDuotone.displayName = "CodeIconBoldDuotone";
export { CodeIconBoldDuotone };
