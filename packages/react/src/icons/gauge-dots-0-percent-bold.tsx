import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeDots0PercentIconBold = memo(
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
          d="M16.597 15.097a1.5 1.5 0 1 1-.001 3 1.5 1.5 0 0 1 0-3M10.586 10.586a2 2 0 1 1 2.828 2.828l-.057.053c-.385.33-1.84 1.42-3.145 2.39-.664.493-1.306.968-1.782 1.319l-.574.422-.158.116-.042.031-.01.008-.003.002a1 1 0 0 1-1.399-1.398l.003-.003.008-.01.031-.043.116-.158a857 857 0 0 1 1.742-2.355c.97-1.306 2.059-2.76 2.39-3.145q.025-.03.052-.057M5.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.404 5.904a1.5 1.5 0 1 1 0 3.001 1.5 1.5 0 0 1 0-3M16.597 5.904a1.5 1.5 0 1 1-.001 3.001 1.5 1.5 0 0 1 0-3M12 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GaugeDots0PercentIconBold.displayName = "GaugeDots0PercentIconBold";
export { GaugeDots0PercentIconBold };
