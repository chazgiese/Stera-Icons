import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BatteryIconFilltone = memo(
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
          d="M15 5c.918 0 1.657 0 2.257.04.608.042 1.146.13 1.656.34a5 5 0 0 1 2.706 2.707c.211.51.3 1.048.341 1.656.04.6.04 1.339.04 2.257s0 1.657-.04 2.257c-.042.609-.13 1.146-.34 1.656a5 5 0 0 1-2.707 2.706c-.51.211-1.047.3-1.656.341-.6.04-1.339.04-2.257.04H7c-.918 0-1.657 0-2.257-.04-.608-.042-1.146-.13-1.656-.34A5 5 0 0 1 .38 15.912c-.211-.51-.3-1.047-.341-1.656C0 13.657 0 12.918 0 12s0-1.657.04-2.257c.042-.608.13-1.146.34-1.656A5 5 0 0 1 3.088 5.38c.51-.211 1.048-.3 1.656-.341C5.343 5 6.082 5 7 5z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M22.5 9.5A1.5 1.5 0 0 1 24 11v2a1.5 1.5 0 0 1-1.5 1.5h-.562q.012-.12.022-.243c.04-.6.04-1.339.04-2.257s0-1.657-.04-2.257q-.01-.123-.023-.243z"
        />
      </svg>
    ))
);
BatteryIconFilltone.displayName = "BatteryIconFilltone";
export { BatteryIconFilltone };
