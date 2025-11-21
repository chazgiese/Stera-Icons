import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BatteryHalfIconFilled = memo(
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
        <g clipPath="url(#clip0_3435_4733)">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M15 5c.918 0 1.657 0 2.257.04.608.042 1.146.13 1.656.34a5 5 0 0 1 2.706 2.707c.183.44.27.903.319 1.413h.562A1.5 1.5 0 0 1 24 11v2a1.5 1.5 0 0 1-1.5 1.5h-.562c-.048.51-.136.973-.319 1.413a5 5 0 0 1-2.706 2.706c-.51.211-1.047.3-1.656.341-.6.04-1.339.04-2.257.04H7c-.918 0-1.657 0-2.257-.04-.608-.042-1.146-.13-1.656-.34A5 5 0 0 1 .38 15.912c-.211-.51-.3-1.047-.341-1.656C0 13.657 0 12.918 0 12s0-1.657.04-2.257c.042-.608.13-1.146.34-1.656A5 5 0 0 1 3.088 5.38c.51-.211 1.048-.3 1.656-.341C5.343 5 6.082 5 7 5zM5.6 8c-.264 0-.522-.001-.739.017a2 2 0 0 0-.77.2 2 2 0 0 0-.873.875 2 2 0 0 0-.201.77c-.018.216-.017.474-.017.738v2.8c0 .264-.001.522.017.739.018.228.063.498.2.77a2 2 0 0 0 .875.873c.271.138.54.183.77.201.216.018.474.017.738.017h3.8c.264 0 .522.001.739-.017.228-.018.498-.063.77-.2a2 2 0 0 0 .873-.875c.138-.271.183-.54.201-.77.018-.216.017-.474.017-.738v-2.8c0-.264.001-.522-.017-.739a2.2 2.2 0 0 0-.114-.566l-.087-.203-.077-.138a2 2 0 0 0-.797-.736 2 2 0 0 0-.77-.201C9.923 7.999 9.665 8 9.4 8z"
            clipRule="evenodd"
          />
        </g>
      </svg>
    ))
);
BatteryHalfIconFilled.displayName = "BatteryHalfIconFilled";
export { BatteryHalfIconFilled };
