import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBarIconDuotone = memo(
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
          d="M16.25 8.775a.474.474 0 0 0-.475.475v9.975h-1.55V13.25a.474.474 0 0 0-.475-.475h-3.5a.474.474 0 0 0-.475.475v5.975h-1.55V5.25a.474.474 0 0 0-.475-.475h-3.5a.474.474 0 0 0-.475.475v13.975h-1.55V5.25c0-1.118.907-2.025 2.025-2.025h3.5c1.118 0 2.025.907 2.025 2.025v6.032q.23-.056.475-.057h3.5q.246 0 .475.057V9.25c0-1.118.907-2.025 2.025-2.025h3.5c1.118 0 2.025.907 2.025 2.025v9.975h-1.55V9.25a.474.474 0 0 0-.475-.475z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M22 19.225a.776.776 0 0 1 0 1.55H2a.776.776 0 0 1 0-1.55z"
        />
      </svg>
    ))
);
ChartBarIconDuotone.displayName = "ChartBarIconDuotone";
export { ChartBarIconDuotone };
