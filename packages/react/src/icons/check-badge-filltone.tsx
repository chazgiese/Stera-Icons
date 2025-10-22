import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CheckBadgeIconFilltone = memo(
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
        <g fill="currentColor" clipPath="url(#clip0_3425_10406)">
          <path
            d="M10.25 1.194a2.475 2.475 0 0 1 3.5 0l1.283 1.284c.412.412.972.643 1.556.643h1.814a2.476 2.476 0 0 1 2.476 2.476V7.41c0 .583.231 1.143.643 1.556l1.284 1.283a2.475 2.475 0 0 1 0 3.5l-1.284 1.283a2.2 2.2 0 0 0-.643 1.556v1.814a2.476 2.476 0 0 1-2.476 2.476H16.59c-.584 0-1.143.231-1.556.644l-1.283 1.283a2.475 2.475 0 0 1-3.5 0l-1.283-1.283a2.2 2.2 0 0 0-1.556-.644H5.596a2.476 2.476 0 0 1-2.475-2.476V16.59c0-.583-.231-1.143-.644-1.556L1.194 13.75a2.475 2.475 0 0 1 0-3.5l1.283-1.283a2.2 2.2 0 0 0 .644-1.556V5.597A2.476 2.476 0 0 1 5.596 3.12h1.815a2.2 2.2 0 0 0 1.556-.643z"
            opacity={0.32}
          />
          <path d="M15.168 8.793a1 1 0 0 1 1.414 1.414l-4.847 4.848c-.1.1-.22.22-.332.315-.12.101-.31.24-.572.313a1.5 1.5 0 0 1-1.005-.07 1.5 1.5 0 0 1-.52-.391c-.098-.11-.2-.247-.284-.36L7.325 12.6a1 1 0 1 1 1.6-1.199l1.558 2.077z" />
        </g>
      </svg>
    ))
);
CheckBadgeIconFilltone.displayName = "CheckBadgeIconFilltone";
export { CheckBadgeIconFilltone };
