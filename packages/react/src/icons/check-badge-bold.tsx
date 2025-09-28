import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CheckBadgeBold = memo(
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
        <g fill="currentColor" clipPath="url(#a)">
          <path d="M15.169 8.793a1 1 0 1 1 1.414 1.414l-4.848 4.848c-.1.1-.22.22-.332.316-.12.1-.31.24-.571.313a1.5 1.5 0 0 1-1.005-.071 1.5 1.5 0 0 1-.52-.391c-.099-.11-.2-.246-.285-.36L7.326 12.6a1 1 0 1 1 1.6-1.2l1.557 2.078z" />
          <path
            fillRule="evenodd"
            d="M9.88 1.707a3 3 0 0 1 4.242 0l1.221 1.222c.188.187.442.293.707.293h1.729a3 3 0 0 1 3 3v1.729c0 .265.105.52.293.707l1.222 1.221a3 3 0 0 1 0 4.242l-1.222 1.222a1 1 0 0 0-.293.707v1.729a3 3 0 0 1-3 3H16.05a1 1 0 0 0-.707.293l-1.221 1.221a3 3 0 0 1-4.242 0l-1.222-1.221a1 1 0 0 0-.707-.293H6.222a3 3 0 0 1-3-3V16.05c0-.265-.105-.52-.293-.707l-1.221-1.222a3 3 0 0 1 0-4.242l1.221-1.221c.188-.188.293-.442.293-.707V6.222a3 3 0 0 1 3-3h1.729c.265 0 .52-.106.707-.293zm2.828 1.414a1 1 0 0 0-1.414 0l-1.222 1.222a3 3 0 0 1-2.121.879H6.222a1 1 0 0 0-1 1v1.729a3 3 0 0 1-.879 2.12l-1.221 1.222a1 1 0 0 0 0 1.414l1.221 1.222c.563.563.88 1.326.88 2.121v1.729a1 1 0 0 0 1 1H7.95a3 3 0 0 1 2.12.879l1.223 1.221a1 1 0 0 0 1.414 0l1.221-1.221a3 3 0 0 1 2.121-.88h1.729a1 1 0 0 0 1-1V16.05a3 3 0 0 1 .879-2.12l1.221-1.223a1 1 0 0 0 0-1.414l-1.221-1.221a3 3 0 0 1-.88-2.121V6.222a1 1 0 0 0-1-1H16.05a3 3 0 0 1-2.12-.879z"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="currentColor" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    ))
);
CheckBadgeBold.displayName = "CheckBadgeBold";
export { CheckBadgeBold };
