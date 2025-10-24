import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowsLeftRightIconBold = memo(
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
          d="M5.793 12.793a1 1 0 0 1 1.414 1.414L4.914 16.5H20.5a1 1 0 0 1 0 2H4.914l2.293 2.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1-.068-1.338l.068-.076zM16.793 2.793a1 1 0 0 1 1.414 0l4 4 .067.073a1 1 0 0 1-.067 1.341l-4 4a1 1 0 0 1-1.414-1.414L19.086 8.5H3.5a1 1 0 0 1 0-2h15.586l-2.293-2.293a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
ArrowsLeftRightIconBold.displayName = "ArrowsLeftRightIconBold";
export { ArrowsLeftRightIconBold };
