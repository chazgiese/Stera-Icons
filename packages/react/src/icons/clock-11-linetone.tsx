import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Clock11IconLinetone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 5a1 1 0 0 1 1 1v6.02l-.005.067-.005.047a1 1 0 0 1-.1.32l-.025.046-.026.042a1.2 1.2 0 0 1-.194.222q-.016.013-.034.025-.018.016-.037.028l-.046.03-.028.02-.016.007-.036.018q-.024.013-.047.024-.032.014-.065.024l-.027.01-.053.015-.046.012-.057.01-.035.005-.051.004-.059.003L12 13l-.02-.001a1 1 0 0 1-.211-.027l-.043-.012-.063-.02-.02-.007-.067-.029-.033-.015-.035-.02-.06-.036-.016-.01a1 1 0 0 1-.094-.075l-.033-.03a1 1 0 0 1-.07-.075l-.02-.026-.034-.045-.031-.049-.016-.023-2-3.464a1 1 0 0 1 1.732-1l.134.232V6a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
Clock11IconLinetone.displayName = "Clock11IconLinetone";
export { Clock11IconLinetone };
