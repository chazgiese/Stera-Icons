import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RulerIconLinetone = memo(
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
          d="M5.91 2.177a2.25 2.25 0 0 1 3.181 0l12.733 12.731a2.25 2.25 0 0 1 0 3.183l-3.733 3.732a2.25 2.25 0 0 1-3.183 0L2.178 9.092a2.25 2.25 0 0 1 0-3.182zm1.767 1.414a.25.25 0 0 0-.353 0L3.59 7.323a.25.25 0 0 0 0 .354l12.732 12.731a.25.25 0 0 0 .354 0l3.732-3.731a.25.25 0 0 0 0-.354z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.207 14.793a1 1 0 0 0-1.414 0l-1.5 1.5-.042.045 1.411 1.412.045-.043 1.5-1.5a1 1 0 0 0 0-1.414M12.207 11.793a1 1 0 0 0-1.414 0l-1.5 1.5-.042.045 1.411 1.412.045-.043 1.5-1.5a1 1 0 0 0 0-1.414M9.207 8.793a1 1 0 0 0-1.414 0l-1.5 1.5-.042.045 1.411 1.412.045-.043 1.5-1.5a1 1 0 0 0 0-1.414"
          clipRule="evenodd"
        />
      </svg>
    ))
);
RulerIconLinetone.displayName = "RulerIconLinetone";
export { RulerIconLinetone };
