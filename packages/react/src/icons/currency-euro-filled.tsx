import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurrencyEuroIconFilled = memo(
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
          d="M19 .5a1.5 1.5 0 0 1 0 3h-3c-2.565 0-4.347.583-5.51 1.747-.629.63-1.156 1.515-1.51 2.753H17a1.5 1.5 0 0 1 0 3H8.526q-.024.479-.026 1 .002.521.026 1H17a1.5 1.5 0 0 1 0 3H8.98c.354 1.238.881 2.123 1.51 2.753C11.652 19.917 13.435 20.5 16 20.5h3a1.5 1.5 0 0 1 0 3h-3c-2.958 0-5.676-.667-7.633-2.628C7.14 19.643 6.325 18.017 5.887 16H4a1.5 1.5 0 0 1 0-3h1.523q-.021-.49-.023-1 .002-.51.023-1H4a1.5 1.5 0 0 1 0-3h1.887c.438-2.017 1.254-3.643 2.48-4.872C10.324 1.168 13.042.5 16 .5z"
        />
      </svg>
    ))
);
CurrencyEuroIconFilled.displayName = "CurrencyEuroIconFilled";
export { CurrencyEuroIconFilled };
