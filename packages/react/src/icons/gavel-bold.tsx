import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GavelIconBold = memo(
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
          d="M11.487 3a2 2 0 0 1 2.828 0l4.243 4.242a2 2 0 0 1 0 2.83l-.707.707a2 2 0 0 1-1.93.515l-.546.544 5.304 5.304a2.5 2.5 0 0 1-3.536 3.536l-5.304-5.305-.545.546a2 2 0 0 1-.515 1.93l-.707.707a2 2 0 0 1-2.83 0L3 14.314a2 2 0 0 1 0-2.828l.707-.708a2 2 0 0 1 1.932-.516l4.623-4.624a2 2 0 0 1 .518-1.93zm1.767 10.96 5.304 5.304a.5.5 0 0 0 .707-.708l-5.304-5.303zm-8.84-1.06 4.243 4.242.707-.707-4.243-4.242zm2.83-1.414 2.829 2.828 4.242-4.242-2.828-2.83zm4.95-6.365 4.242 4.243.707-.708L12.9 4.414z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GavelIconBold.displayName = "GavelIconBold";
export { GavelIconBold };
