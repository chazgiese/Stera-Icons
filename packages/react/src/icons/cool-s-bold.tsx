import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CoolSIconBold = memo(
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
          d="M11.519 1.123c.348-.192.786-.16 1.106.095l5 4c.237.19.375.478.375.782v4a1 1 0 0 1-1 1h-1.586l2.293 2.293A1 1 0 0 1 18 14v4a1 1 0 0 1-.375.78l-5 4a1 1 0 0 1-1.25 0l-5-4A1 1 0 0 1 6 18v-4a1 1 0 0 1 1-1h1.586l-2.293-2.293A1 1 0 0 1 6 10V6c0-.304.138-.592.375-.782l5-4zM8 6.48v3.106l4.707 4.707A1 1 0 0 1 13 15v2a1 1 0 1 1-2 0v-1.586L10.586 15H8v2.518l4 3.2 4-3.2v-3.104l-4.707-4.707A1 1 0 0 1 11 9V7a1 1 0 0 1 2 0v1.586l.414.414H16V6.48l-4-3.2z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CoolSIconBold.displayName = "CoolSIconBold";
export { CoolSIconBold };
