import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HashCircleIconFilled = memo(
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
        <path fill="currentColor" d="M13 13h-2v-2h2z" />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m2 5a1 1 0 0 0-1 1v2h-2V7a1 1 0 1 0-2 0v2H7a1 1 0 0 0 0 2h2v2H7a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2h2a1 1 0 1 0 0-2h-2V7a1 1 0 0 0-1-1"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HashCircleIconFilled.displayName = "HashCircleIconFilled";
export { HashCircleIconFilled };
