import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WineBottleIconFill = memo(
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
          d="M12.853 1.005A1 1 0 0 1 13.75 2v5.646A3.5 3.5 0 0 1 16.25 11v10a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2V11a3.5 3.5 0 0 1 2.5-3.354V2a1 1 0 0 1 1-1h1.5z"
        />
      </svg>
    ))
);
WineBottleIconFill.displayName = "WineBottleIconFill";
export { WineBottleIconFill };
