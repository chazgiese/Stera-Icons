import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlaskFullIconDuotone = memo(
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
          d="M15.25 8.919c0 .575.153 1.14.443 1.638l4.7 8.057c1.07 1.834-.253 4.136-2.375 4.136H5.983c-2.123 0-3.446-2.302-2.376-4.136l4.7-8.057c.29-.497.443-1.063.443-1.638V2.75h1.5v6.169a4.75 4.75 0 0 1-.647 2.393l-4.7 8.058a1.25 1.25 0 0 0 1.08 1.88h12.035a1.25 1.25 0 0 0 1.08-1.88l-4.7-8.058a4.75 4.75 0 0 1-.648-2.393V2.75h1.5z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M11.843 14.203a4.65 4.65 0 0 1 3.239-.734l.625.089.964 1.652-1.8-.257a3.16 3.16 0 0 0-2.196.498 4.65 4.65 0 0 1-4.414.405l-1.048-.449.762-1.305.878.375c.979.42 2.103.317 2.99-.274M15.5 1.25a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
FlaskFullIconDuotone.displayName = "FlaskFullIconDuotone";
export { FlaskFullIconDuotone };
