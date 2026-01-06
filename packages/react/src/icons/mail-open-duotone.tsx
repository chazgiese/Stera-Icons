import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MailOpenIconDuotone = memo(
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
          strokeWidth={1.5}
          d="m3 9.5.07.054m17.86-.002L21 9.5"
        />
        <path
          fill="currentColor"
          d="M2.252 9.5c0 .23.104.45.29.594l1.208.932V18A2.25 2.25 0 0 0 6 20.25h12A2.25 2.25 0 0 0 20.25 18v-7.02l1.193-.875a.75.75 0 0 0 .305-.605h.002V18A3.75 3.75 0 0 1 18 21.75H6A3.75 3.75 0 0 1 2.25 18V9.5z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.664 2.783a3.95 3.95 0 0 1 4.672 0l5.8 4.253c.736.54 1.385 1.315 1.598 2.308a.75.75 0 0 1-.29.761l-6.708 4.92a3.75 3.75 0 0 1-2.218.725h-1.37c-.828 0-1.635-.275-2.291-.781l-6.315-4.875a.75.75 0 0 1-.275-.75c.212-.995.861-1.768 1.597-2.308zm3.785 1.21a2.45 2.45 0 0 0-2.898 0l-5.8 4.253c-.393.289-.692.624-.869.987l5.892 4.548c.393.304.877.47 1.375.47h1.369c.478-.001.945-.153 1.33-.436l6.263-4.593c-.179-.359-.474-.691-.862-.976z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MailOpenIconDuotone.displayName = "MailOpenIconDuotone";
export { MailOpenIconDuotone };
