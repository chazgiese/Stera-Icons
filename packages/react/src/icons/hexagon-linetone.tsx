import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HexagonIconLinetone = memo(
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
          d="M2.688 12q0 .33.072.653c.1.448.355.89 1.133 2.162l1.588 2.601c.717 1.173.972 1.567 1.294 1.848.31.269.671.473 1.062.596.407.13.877.14 2.252.14h3.821c1.375 0 1.845-.01 2.252-.14a3 3 0 0 0 1.063-.596c.322-.28.577-.675 1.294-1.848l1.588-2.6c.778-1.273 1.033-1.715 1.133-2.163q.072-.324.072-.653h2q0 .55-.12 1.088c-.189.849-.675 1.62-1.378 2.77l-1.59 2.601c-.648 1.061-1.076 1.784-1.687 2.314a5 5 0 0 1-1.771.994c-.772.244-1.612.233-2.856.233H10.09c-1.244 0-2.084.01-2.856-.233a5 5 0 0 1-1.77-.994c-.61-.53-1.04-1.253-1.689-2.314l-1.588-2.6c-.704-1.151-1.19-1.922-1.378-2.771A5 5 0 0 1 .688 12z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M13.91 2c1.244 0 2.084-.011 2.856.233a5 5 0 0 1 1.771.993c.61.531 1.04 1.254 1.688 2.315l1.588 2.6c.704 1.151 1.19 1.922 1.38 2.77q.119.54.118 1.089h-2a3 3 0 0 0-.07-.653c-.1-.448-.356-.89-1.134-2.163l-1.588-2.6c-.717-1.173-.972-1.568-1.294-1.848a3 3 0 0 0-1.063-.597c-.407-.128-.877-.14-2.252-.14H10.09c-1.375 0-1.845.012-2.252.14a3 3 0 0 0-1.062.597c-.322.28-.577.675-1.294 1.848l-1.588 2.6C3.115 10.457 2.86 10.9 2.76 11.347a3 3 0 0 0-.072.653h-2q0-.55.12-1.088c.189-.849.674-1.62 1.378-2.77L3.774 5.54c.65-1.062 1.078-1.784 1.689-2.315a5 5 0 0 1 1.77-.993C8.005 1.99 8.845 2 10.09 2z"
        />
      </svg>
    ))
);
HexagonIconLinetone.displayName = "HexagonIconLinetone";
export { HexagonIconLinetone };
