import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlaskFullIconFill = memo(
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
          d="M15.5 1a1 1 0 0 1 .103 1.995L15.5 3v5.919c0 .531.14 1.053.408 1.512l4.701 8.057c1.167 2-.276 4.512-2.591 4.512H5.982c-2.315 0-3.758-2.512-2.591-4.512l4.7-8.057c.268-.459.409-.981.409-1.512V3a1 1 0 0 1 0-2zm-5 7.919a5 5 0 0 1-.68 2.518l-1.487 2.546.617.265a2.9 2.9 0 0 0 2.754-.253 4.9 4.9 0 0 1 3.413-.774l.112.015-1.048-1.799A5 5 0 0 1 13.5 8.92V3h-3z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlaskFullIconFill.displayName = "FlaskFullIconFill";
export { FlaskFullIconFill };
