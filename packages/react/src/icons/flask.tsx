import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlaskIcon = memo(
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
          d="M15.5 1.25a.75.75 0 0 1 0 1.5h-.25v6.169c0 .575.153 1.14.443 1.638l4.7 8.057c1.07 1.834-.253 4.136-2.375 4.136H5.983c-2.123 0-3.446-2.302-2.376-4.136l4.7-8.057c.29-.497.443-1.063.443-1.638V2.75H8.5a.75.75 0 0 1 0-1.5zm-5.25 7.669c0 .84-.224 1.666-.647 2.393l-4.7 8.058a1.25 1.25 0 0 0 1.08 1.88h12.035a1.25 1.25 0 0 0 1.08-1.88l-4.7-8.058a4.75 4.75 0 0 1-.648-2.393V2.75h-3.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlaskIcon.displayName = "FlaskIcon";
export { FlaskIcon };
