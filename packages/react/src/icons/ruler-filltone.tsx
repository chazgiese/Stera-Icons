import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RulerIconFilltone = memo(
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
          d="M5.91 2.177a2.25 2.25 0 0 1 3.181 0l12.733 12.731a2.25 2.25 0 0 1 0 3.183l-3.733 3.732a2.25 2.25 0 0 1-3.183 0L2.178 9.092a2.25 2.25 0 0 1 0-3.182z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.207 14.793a1 1 0 0 0-1.414 0l-2.958 2.958 1.414 1.414 2.958-2.958a1 1 0 0 0 0-1.414M12.207 11.793a1 1 0 0 0-1.414 0l-2.958 2.958 1.414 1.414 2.958-2.958a1 1 0 0 0 0-1.414M9.207 8.793a1 1 0 0 0-1.414 0l-2.958 2.958 1.414 1.414 2.958-2.958a1 1 0 0 0 0-1.414"
          clipRule="evenodd"
        />
      </svg>
    ))
);
RulerIconFilltone.displayName = "RulerIconFilltone";
export { RulerIconFilltone };
