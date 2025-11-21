import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DatabaseIconFilltone = memo(
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
          stroke="currentColor"
          strokeWidth={2}
          d="M4 12V5m0 7c0 1.657 3.582 3 8 3s8-1.343 8-3M4 12v7c0 1.657 3.582 3 8 3s8-1.343 8-3v-7M4 5c0 1.657 3.582 3 8 3s8-1.343 8-3M4 5c0-1.657 3.582-3 8-3s8 1.343 8 3m0 0v7"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M19 19c0 .026-.01.17-.292.42-.28.249-.744.518-1.402.765-1.31.49-3.185.815-5.306.815s-3.997-.325-5.306-.815c-.658-.247-1.121-.516-1.402-.765C5.01 19.17 5 19.025 5 19v-4.386q.466.247.992.444C7.578 15.653 9.702 16 12 16s4.422-.348 6.008-.942q.527-.197.992-.444zM19 12c0 .025-.01.17-.292.42-.28.249-.744.518-1.402.765-1.31.49-3.185.815-5.306.815s-3.997-.325-5.306-.815c-.658-.247-1.121-.516-1.402-.765C5.01 12.17 5 12.025 5 12V7.614q.466.246.992.444C7.578 8.652 9.702 9 12 9s4.422-.348 6.008-.942q.527-.198.992-.444zM12 3c2.121 0 3.996.325 5.306.815.658.247 1.121.516 1.402.765.282.25.292.394.292.42s-.01.17-.292.42c-.28.249-.744.518-1.402.765C15.996 6.675 14.12 7 12 7s-3.997-.325-5.306-.815c-.658-.247-1.121-.516-1.402-.765C5.01 5.17 5 5.026 5 5s.01-.17.292-.42c.28-.249.744-.518 1.402-.765C8.004 3.325 9.88 3 12 3" />
        </g>
      </svg>
    ))
);
DatabaseIconFilltone.displayName = "DatabaseIconFilltone";
export { DatabaseIconFilltone };
