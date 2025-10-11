import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurrencyEuroCirlceIcon = memo(
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
          d="M15 6.25a.75.75 0 0 1 0 1.5h-1.5c-1.282 0-2.174.292-2.755.874-.27.27-.503.636-.676 1.126H13a.75.75 0 0 1 0 1.5H9.778a10 10 0 0 0 0 1.5H13a.75.75 0 0 1 0 1.5h-2.93c.172.49.405.855.675 1.126.581.582 1.473.874 2.755.874H15a.75.75 0 0 1 0 1.5h-1.5c-1.48 0-2.838-.333-3.816-1.314-.562-.562-.951-1.292-1.181-2.186H7.5a.75.75 0 0 1 0-1.5h.774a11.5 11.5 0 0 1 0-1.5H7.5a.75.75 0 0 1 0-1.5h1.003c.23-.894.619-1.624 1.18-2.187.98-.98 2.338-1.313 3.817-1.313z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CurrencyEuroCirlceIcon.displayName = "CurrencyEuroCirlceIcon";
export { CurrencyEuroCirlceIcon };
