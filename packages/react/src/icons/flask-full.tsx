import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlaskFull = memo(
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
          d="M15.5 1.25a.75.75 0 0 1 0 1.5h-.25v6.169c0 .575.153 1.14.443 1.638l4.7 8.057c1.07 1.834-.253 4.136-2.375 4.136H5.983c-2.123 0-3.446-2.302-2.376-4.136l4.7-8.057c.29-.497.443-1.063.443-1.638V2.75H8.5a.75.75 0 0 1 0-1.5zm-.63 13.703a3.16 3.16 0 0 0-2.195.498 4.65 4.65 0 0 1-4.414.405l-1.048-.449-2.31 3.963a1.25 1.25 0 0 0 1.08 1.88h12.035a1.25 1.25 0 0 0 1.08-1.88l-2.427-4.16zM10.25 8.92c0 .84-.224 1.666-.647 2.393l-1.628 2.79.878.375c.979.42 2.104.317 2.99-.274a4.65 4.65 0 0 1 3.24-.734l.624.089-1.31-2.246a4.75 4.75 0 0 1-.647-2.393V2.75h-3.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlaskFull.displayName = "FlaskFull";
export { FlaskFull };
