import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BatteryLowIconBold = memo(
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
        <g fill="currentColor" clipPath="url(#clip0_5025_7358)">
          <path d="M5 8a2 2 0 0 1 2 2v4a2 2 0 0 1-3.99.204L3 14v-4a2 2 0 0 1 2-2" />
          <path
            fillRule="evenodd"
            d="M15 5c.918 0 1.657 0 2.257.04.608.042 1.146.13 1.656.34a5 5 0 0 1 2.706 2.707c.183.44.27.903.319 1.413h.562A1.5 1.5 0 0 1 24 11v2a1.5 1.5 0 0 1-1.5 1.5h-.562c-.048.51-.136.973-.319 1.413a5 5 0 0 1-2.706 2.706c-.51.211-1.047.3-1.656.341-.6.04-1.339.04-2.257.04H7c-.918 0-1.657 0-2.257-.04-.608-.042-1.146-.13-1.656-.34A5 5 0 0 1 .38 15.912c-.211-.51-.3-1.047-.341-1.656C0 13.657 0 12.918 0 12s0-1.657.04-2.257c.042-.608.13-1.146.34-1.656A5 5 0 0 1 3.088 5.38c.51-.211 1.048-.3 1.656-.341C5.343 5 6.082 5 7 5zM7 7c-.945 0-1.604.001-2.12.036-.507.035-.803.1-1.028.193a3 3 0 0 0-1.623 1.623c-.094.225-.158.521-.193 1.028C2.001 10.396 2 11.055 2 12s.001 1.604.036 2.12c.035.507.1.803.193 1.028a3 3 0 0 0 1.623 1.624c.225.093.521.157 1.028.192.516.035 1.175.036 2.12.036h8c.945 0 1.604-.001 2.12-.036.507-.035.803-.1 1.028-.192a3 3 0 0 0 1.624-1.624c.093-.225.157-.521.192-1.028.035-.516.036-1.175.036-2.12s-.001-1.604-.036-2.12c-.035-.507-.1-.803-.192-1.028a3 3 0 0 0-1.624-1.623c-.225-.094-.521-.158-1.028-.193C16.604 7.001 15.945 7 15 7z"
            clipRule="evenodd"
          />
        </g>
      </svg>
    ))
);
BatteryLowIconBold.displayName = "BatteryLowIconBold";
export { BatteryLowIconBold };
