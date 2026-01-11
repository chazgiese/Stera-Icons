import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeDots66PercentIconBoldDuotone = memo(
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
          <path d="M7.404 15.097a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.597 15.097a1.5 1.5 0 1 1-.001 3 1.5 1.5 0 0 1 0-3M5.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.404 5.904a1.5 1.5 0 1 1 0 3.001 1.5 1.5 0 0 1 0-3M12 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
          <path
            fillRule="evenodd"
            d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
            clipRule="evenodd"
          />
        </g>
        <path
          fill="currentColor"
          d="M16.358 6.245a1 1 0 0 1 1.398 1.396l-.001.001-.002.004-.008.01-.031.042-.116.158a574 574 0 0 1-1.741 2.356c-.97 1.306-2.06 2.76-2.39 3.145q-.026.03-.053.057a2 2 0 0 1-2.828-2.828l.057-.053c.385-.33 1.84-1.42 3.145-2.39l1.782-1.32.574-.42.157-.117.043-.031q.006-.006.01-.008z"
        />
      </svg>
    ))
);
GaugeDots66PercentIconBoldDuotone.displayName =
  "GaugeDots66PercentIconBoldDuotone";
export { GaugeDots66PercentIconBoldDuotone };
