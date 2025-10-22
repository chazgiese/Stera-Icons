import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleDivideAltIconBold = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1M3.057 13c.497 4.5 4.31 8 8.943 8s8.446-3.5 8.943-8zM12 3c-4.632 0-8.446 3.5-8.943 8h17.886c-.497-4.5-4.31-8-8.943-8"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CircleDivideAltIconBold.displayName = "CircleDivideAltIconBold";
export { CircleDivideAltIconBold };
