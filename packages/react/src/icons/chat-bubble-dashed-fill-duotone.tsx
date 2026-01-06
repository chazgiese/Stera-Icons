import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBubbleDashedIconFillDuotone = memo(
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
          d="M19 11c0 3.314-3.134 6-7 6s-7-2.686-7-6 3.134-6 7-6 7 2.686 7 6"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M3.252 17.314a1 1 0 0 1 1.94.484l-.583 2.336 3.55-1.776a1 1 0 0 1 .895 1.79l-3.551 1.774c-1.528.764-3.248-.616-2.834-2.274zM13.689 18.858a1.001 1.001 0 0 1 .334 1.973q-.989.168-2.027.169a1 1 0 0 1 0-2c.58 0 1.145-.05 1.693-.142M19.387 15.568a1 1 0 0 1 1.573 1.235 10.7 10.7 0 0 1-3.107 2.666 1 1 0 0 1-.994-1.737 8.7 8.7 0 0 0 2.528-2.164M1.96 11.742a1 1 0 0 1 1.188.769c.136.637.372 1.287.725 1.941a1 1 0 0 1-1.76.951 9.3 9.3 0 0 1-.921-2.473 1 1 0 0 1 .768-1.188M21.562 8.175a1 1 0 0 1 1.2.748 9.2 9.2 0 0 1 0 4.154 1 1 0 1 1-1.947-.452 7.2 7.2 0 0 0 0-3.25 1 1 0 0 1 .747-1.2M4.83 3.597a1 1 0 0 1 1.262 1.551c-1.13.92-2.018 2.07-2.546 3.33a1 1 0 0 1-1.845-.772c.668-1.594 1.769-3.003 3.13-4.11M16.488 2.903a1 1 0 0 1 1.365-.372c1.213.694 2.27 1.6 3.107 2.666a1 1 0 1 1-1.573 1.235 8.7 8.7 0 0 0-2.527-2.164 1 1 0 0 1-.372-1.365M11.996 1c.691 0 1.37.058 2.027.169a1 1 0 0 1-.334 1.973A10 10 0 0 0 11.996 3a9 9 0 0 0-2.103.255 1 1 0 0 1-.473-1.943A11 11 0 0 1 11.996 1"
        />
      </svg>
    ))
);
ChatBubbleDashedIconFillDuotone.displayName = "ChatBubbleDashedIconFillDuotone";
export { ChatBubbleDashedIconFillDuotone };
