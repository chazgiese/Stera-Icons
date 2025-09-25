import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DropletBold = memo(
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
          d="M16.751 5.203c1.028 1.169 2.078 2.536 2.875 3.986.792 1.44 1.374 3.032 1.374 4.63C21 18.868 16.992 23 12 23s-9-4.132-9-9.181c0-1.598.582-3.19 1.374-4.63.797-1.45 1.847-2.817 2.875-3.986 1.255-1.426 2.617-2.833 4.13-3.985.371-.283.88-.29 1.243 0a33.7 33.7 0 0 1 4.129 3.985m-8 1.322c-.972 1.104-1.922 2.35-2.625 3.627C5.418 11.44 5 12.69 5 13.82 5 17.806 8.155 21 12 21s7-3.194 7-7.181c0-1.13-.418-2.38-1.126-3.667-.703-1.277-1.653-2.523-2.625-3.627A35 35 0 0 0 12 3.308c-.73.633-1.994 1.79-3.249 3.217"
          clipRule="evenodd"
        />
      </svg>
    ))
);
DropletBold.displayName = "DropletBold";
export { DropletBold };
