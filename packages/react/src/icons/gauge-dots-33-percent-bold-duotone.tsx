import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeDots33PercentIconBoldDuotone = memo(
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
          d="M6.344 6.343a1 1 0 0 1 1.298-.099l.004.003.01.007.043.032.158.117a810 810 0 0 1 2.355 1.74c1.306.97 2.76 2.06 3.145 2.39q.03.025.057.052a2 2 0 0 1-2.828 2.83l-.053-.057c-.33-.385-1.42-1.84-2.39-3.146a667 667 0 0 1-1.74-2.355l-.117-.158-.031-.042-.008-.011-.053-.08a1 1 0 0 1 .15-1.223"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M7.404 15.097a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.597 15.097a1.5 1.5 0 1 1-.001 3 1.5 1.5 0 0 1 0-3M5.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.597 5.904a1.5 1.5 0 1 1-.001 3.001 1.5 1.5 0 0 1 0-3M12 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
          <path
            fillRule="evenodd"
            d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
            clipRule="evenodd"
          />
        </g>
      </svg>
    ))
);
GaugeDots33PercentIconBoldDuotone.displayName =
  "GaugeDots33PercentIconBoldDuotone";
export { GaugeDots33PercentIconBoldDuotone };
