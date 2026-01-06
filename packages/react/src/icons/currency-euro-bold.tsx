import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurrencyEuroIconBold = memo(
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
          d="M18 2a1 1 0 1 1 0 2h-2.5c-2.15 0-3.703.524-4.741 1.647-.68.737-1.212 1.81-1.506 3.353H16a1 1 0 1 1 0 2H9.025a20 20 0 0 0 0 2H16a1 1 0 1 1 0 2H9.253c.294 1.543.825 2.616 1.506 3.352C11.797 19.476 13.349 20 15.5 20H18a1 1 0 1 1 0 2h-2.5c-2.452 0-4.649-.6-6.21-2.29-1.061-1.148-1.746-2.711-2.07-4.71H4a1 1 0 1 1 0-2h3.023a23 23 0 0 1 0-2H4a1 1 0 1 1 0-2h3.22c.324-1.999 1.009-3.562 2.07-4.71C10.851 2.6 13.048 2 15.5 2z"
        />
      </svg>
    ))
);
CurrencyEuroIconBold.displayName = "CurrencyEuroIconBold";
export { CurrencyEuroIconBold };
