import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurrencyEuroIcon = memo(
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
          d="M19 1.25a.75.75 0 0 1 0 1.5h-3c-2.663 0-4.68.604-6.04 1.968-.981.983-1.693 2.434-2.016 4.532H17a.75.75 0 0 1 0 1.5H7.786a21 21 0 0 0 0 2.5H17a.75.75 0 0 1 0 1.5H7.944c.323 2.098 1.035 3.55 2.016 4.532 1.36 1.364 3.377 1.968 6.04 1.968h3a.75.75 0 0 1 0 1.5h-3c-2.86 0-5.343-.646-7.102-2.407-1.305-1.308-2.131-3.152-2.47-5.593H4a.75.75 0 0 1 0-1.5h2.285a23 23 0 0 1 0-2.5H4a.75.75 0 0 1 0-1.5h2.428c.339-2.44 1.165-4.285 2.47-5.593C10.657 1.896 13.14 1.25 16 1.25z"
        />
      </svg>
    ))
);
CurrencyEuroIcon.displayName = "CurrencyEuroIcon";
export { CurrencyEuroIcon };
