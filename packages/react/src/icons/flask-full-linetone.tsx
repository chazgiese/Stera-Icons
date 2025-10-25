import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlaskFullIconLinetone = memo(
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
          d="M14.5 1a1 1 0 0 1 1 1v6.919c0 .531.14 1.053.408 1.512l4.701 8.057c1.167 2-.276 4.512-2.591 4.512H5.982c-2.315 0-3.758-2.512-2.591-4.512l4.7-8.057c.268-.459.409-.981.409-1.512V2a1 1 0 0 1 1-1zm-4 7.919a5 5 0 0 1-.68 2.518l-4.702 8.06A1 1 0 0 0 5.982 21h12.036a1 1 0 0 0 .864-1.504l-4.701-8.058a5 5 0 0 1-.681-2.519V3h-3z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path fill="currentColor" d="M15.5 1a1 1 0 1 1 0 2h-7a1 1 0 0 1 0-2z" />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="m7.319 15.724.844.362a4.9 4.9 0 0 0 4.65-.427 2.9 2.9 0 0 1 2.022-.458l1.681.24-1.286-2.205-.113-.016a4.9 4.9 0 0 0-3.413.775 2.9 2.9 0 0 1-2.754.253l-.616-.264z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlaskFullIconLinetone.displayName = "FlaskFullIconLinetone";
export { FlaskFullIconLinetone };
