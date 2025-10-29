import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurrencyEuroIconFilltone = memo(
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
          <path d="M5.523 13c.046 1.081.164 2.081.364 3H4a1.5 1.5 0 0 1 0-3zM17 13a1.5 1.5 0 0 1 0 3H8.98c-.238-.83-.397-1.82-.454-3zM5.887 8c-.2.919-.318 1.919-.364 3H4a1.5 1.5 0 0 1 0-3zM17 8a1.5 1.5 0 0 1 0 3H8.526c.057-1.18.216-2.17.453-3z" />
        </g>
        <path
          fill="currentColor"
          d="M19 .5a1.5 1.5 0 0 1 0 3h-3c-2.565 0-4.347.583-5.51 1.747C9.325 6.414 8.5 8.451 8.5 12s.825 5.586 1.99 6.753C11.652 19.917 13.435 20.5 16 20.5h3a1.5 1.5 0 0 1 0 3h-3c-2.958 0-5.676-.667-7.633-2.628C6.413 18.915 5.5 15.951 5.5 12s.913-6.914 2.867-8.872C10.324 1.168 13.042.5 16 .5z"
        />
      </svg>
    ))
);
CurrencyEuroIconFilltone.displayName = "CurrencyEuroIconFilltone";
export { CurrencyEuroIconFilltone };
