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
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.25 1.194a2.475 2.475 0 0 1 3.5 0l1.283 1.283c.413.413.973.644 1.556.644h1.814a2.476 2.476 0 0 1 2.476 2.476V7.41c0 .583.231 1.143.644 1.556l1.283 1.283a2.475 2.475 0 0 1 0 3.5l-1.283 1.283a2.2 2.2 0 0 0-.644 1.556v1.814a2.476 2.476 0 0 1-2.476 2.476H16.59c-.583 0-1.143.231-1.556.643l-1.283 1.284a2.475 2.475 0 0 1-3.5 0l-1.283-1.284a2.2 2.2 0 0 0-1.556-.643H5.597a2.476 2.476 0 0 1-2.476-2.476V16.59a2.2 2.2 0 0 0-.643-1.556L1.194 13.75a2.475 2.475 0 0 1 0-3.5l1.284-1.283A2.2 2.2 0 0 0 3.12 7.41V5.597A2.476 2.476 0 0 1 5.597 3.12H7.41a2.2 2.2 0 0 0 1.556-.644zm6.332 7.599a1 1 0 0 0-1.414 0l-4.685 4.685L8.925 11.4a1 1 0 0 0-1.6 1.2l1.697 2.262c.084.113.186.25.284.36.104.117.272.281.52.39.317.139.672.164 1.005.072.262-.073.451-.213.571-.314.113-.095.233-.215.333-.315l4.847-4.848a1 1 0 0 0 0-1.414"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M15.168 8.793a1 1 0 0 1 1.414 1.414l-4.847 4.848c-.1.1-.22.22-.332.315-.12.101-.31.24-.572.314a1.5 1.5 0 0 1-1.005-.072 1.5 1.5 0 0 1-.52-.39c-.098-.11-.2-.246-.284-.36L7.325 12.6a1 1 0 1 1 1.6-1.2l1.558 2.078z"
        />
      </svg>
    ))
);
CheckBadgeIconFilltone.displayName = "CheckBadgeIconFilltone";
export { CheckBadgeIconFilltone };
