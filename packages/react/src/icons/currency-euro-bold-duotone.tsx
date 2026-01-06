import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurrencyEuroIconBoldDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M7.023 13q.047 1.065.197 2H4a1 1 0 1 1 0-2zM16 13a1 1 0 1 1 0 2H9.253a14.5 14.5 0 0 1-.228-2zM7.22 9q-.15.935-.197 2H4a1 1 0 1 1 0-2zM16 9a1 1 0 1 1 0 2H9.025c.037-.742.115-1.405.228-2z" />
        </g>
        <path
          fill="currentColor"
          d="M18 2a1 1 0 1 1 0 2h-2.5c-2.15 0-3.703.524-4.741 1.647C9.703 6.79 9 8.742 9 12s.703 5.21 1.759 6.352C11.797 19.476 13.349 20 15.5 20H18a1 1 0 1 1 0 2h-2.5c-2.452 0-4.649-.6-6.21-2.29C7.746 18.04 7 15.492 7 12s.746-6.04 2.29-7.71C10.851 2.6 13.048 2 15.5 2z"
        />
      </svg>
    ))
);
CurrencyEuroIconBoldDuotone.displayName = "CurrencyEuroIconBoldDuotone";
export { CurrencyEuroIconBoldDuotone };
