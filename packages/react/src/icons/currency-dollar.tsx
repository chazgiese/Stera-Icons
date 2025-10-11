import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurrencyDollarIcon = memo(
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
          d="M12 1.25a.75.75 0 0 1 .75.75v3.25H17a.75.75 0 0 1 0 1.5h-4.25v4.5H15a3.75 3.75 0 1 1 0 7.5h-2.25V22a.75.75 0 0 1-1.5 0v-3.25H7a.75.75 0 0 1 0-1.5h4.25v-4.5H10a3.75 3.75 0 1 1 0-7.5h1.25V2a.75.75 0 0 1 .75-.75m.75 16H15a2.25 2.25 0 0 0 0-4.5h-2.25zM10 6.75a2.25 2.25 0 0 0 0 4.5h1.25v-4.5z"
        />
      </svg>
    ))
);
CurrencyDollarIcon.displayName = "CurrencyDollarIcon";
export { CurrencyDollarIcon };
