import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BatteryLowIconFilled = memo(
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
        <g
          fill="currentColor"
          fillRule="evenodd"
          clipPath="url(#clip0_5011_7252)"
          clipRule="evenodd"
        >
          <path d="M15 5c.918 0 1.657 0 2.257.04.608.042 1.146.13 1.656.34a5 5 0 0 1 2.706 2.707c.183.44.27.903.319 1.413h.562A1.5 1.5 0 0 1 24 11v2a1.5 1.5 0 0 1-1.5 1.5h-.562c-.048.51-.136.973-.319 1.413a5 5 0 0 1-2.706 2.706c-.51.211-1.047.3-1.656.341-.6.04-1.339.04-2.257.04H7c-.918 0-1.657 0-2.257-.04-.608-.042-1.146-.13-1.656-.34A5 5 0 0 1 .38 15.912c-.211-.51-.3-1.047-.341-1.656C0 13.657 0 12.918 0 12s0-1.657.04-2.257c.042-.608.13-1.146.34-1.656A5 5 0 0 1 3.088 5.38c.51-.211 1.048-.3 1.656-.341C5.343 5 6.082 5 7 5zM5 8a2 2 0 0 0-2 2v4l.01.204A2 2 0 0 0 7 14v-4a2 2 0 0 0-2-2" />
          <path d="M15 5c.918 0 1.657 0 2.257.04.608.042 1.146.13 1.656.34a5 5 0 0 1 2.706 2.707c.183.44.27.903.319 1.413h.562A1.5 1.5 0 0 1 24 11v2a1.5 1.5 0 0 1-1.5 1.5h-.562c-.048.51-.136.973-.319 1.413a5 5 0 0 1-2.706 2.706c-.51.211-1.047.3-1.656.341-.6.04-1.339.04-2.257.04H7c-.918 0-1.657 0-2.257-.04-.608-.042-1.146-.13-1.656-.34A5 5 0 0 1 .38 15.912c-.211-.51-.3-1.047-.341-1.656C0 13.657 0 12.918 0 12s0-1.657.04-2.257c.042-.608.13-1.146.34-1.656A5 5 0 0 1 3.088 5.38c.51-.211 1.048-.3 1.656-.341C5.343 5 6.082 5 7 5zM5 8a2 2 0 0 0-2 2v4l.01.204A2 2 0 0 0 7 14v-4a2 2 0 0 0-2-2" />
        </g>
      </svg>
    ))
);
BatteryLowIconFilled.displayName = "BatteryLowIconFilled";
export { BatteryLowIconFilled };
