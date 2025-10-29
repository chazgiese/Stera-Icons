import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CheckBadgeIconFilled = memo(
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
        <g clipPath="url(#clip0_5019_5404)">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M10.25 1.194a2.475 2.475 0 0 1 3.5 0l1.283 1.283c.412.413.973.644 1.556.644h1.814a2.476 2.476 0 0 1 2.476 2.476V7.41c0 .583.231 1.143.643 1.556l1.284 1.283a2.475 2.475 0 0 1 0 3.5l-1.284 1.283a2.2 2.2 0 0 0-.643 1.556v1.814a2.476 2.476 0 0 1-2.476 2.476H16.59c-.583 0-1.143.231-1.556.643l-1.283 1.284a2.475 2.475 0 0 1-3.5 0l-1.283-1.284a2.2 2.2 0 0 0-1.556-.643H5.596a2.476 2.476 0 0 1-2.475-2.476V16.59c0-.583-.231-1.143-.644-1.556L1.194 13.75a2.475 2.475 0 0 1 0-3.5l1.283-1.283a2.2 2.2 0 0 0 .644-1.556V5.597A2.476 2.476 0 0 1 5.596 3.12h1.815a2.2 2.2 0 0 0 1.556-.644zm6.332 7.599a1 1 0 0 0-1.414 0l-4.686 4.684L8.925 11.4a1 1 0 0 0-1.6 1.2l1.696 2.262c.085.113.186.25.284.36.105.117.272.281.521.39a1.5 1.5 0 0 0 1.005.072c.262-.073.451-.213.571-.314.113-.095.232-.215.332-.315l4.848-4.848a1 1 0 0 0 0-1.414"
            clipRule="evenodd"
          />
        </g>
      </svg>
    ))
);
CheckBadgeIconFilled.displayName = "CheckBadgeIconFilled";
export { CheckBadgeIconFilled };
