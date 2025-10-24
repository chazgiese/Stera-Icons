import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurrencyCentIconFilled = memo(
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
          d="M12 .5A1.5 1.5 0 0 1 13.5 2v2.062q.154.02.307.045a8 8 0 0 1 4.21 2.1 1.5 1.5 0 0 1-2.068 2.172A5 5 0 0 0 13.5 7.104V16.9q.182-.036.362-.088a5 5 0 0 0 2.468-1.597 1.5 1.5 0 0 1 2.298 1.929 8 8 0 0 1-5.128 2.793V22a1.5 1.5 0 0 1-3 0v-2.255a8.001 8.001 0 0 1 0-15.491V2A1.5 1.5 0 0 1 12 .5m-1.597 6.96a5 5 0 0 0-1.874 7.577A5 5 0 0 0 10.5 16.58V7.42q-.049.021-.097.042"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CurrencyCentIconFilled.displayName = "CurrencyCentIconFilled";
export { CurrencyCentIconFilled };
