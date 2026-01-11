import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BellOffIconFillDuotone = memo(
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
          <path
            fillRule="evenodd"
            d="M17.336 18.75h-.392a5 5 0 0 1-9.888 0H3.65c-1.749 0-2.83-1.908-1.93-3.407l1.068-1.778a3.25 3.25 0 0 0 .463-1.673V10a8.7 8.7 0 0 1 1.094-4.24zm-8.238 0A3 3 0 0 0 12.001 21a3 3 0 0 0 2.9-2.25z"
            clipRule="evenodd"
          />
          <path d="M12 1.25A8.75 8.75 0 0 1 20.75 10v1.892c0 .589.16 1.167.463 1.673l1.068 1.778c.899 1.5-.181 3.407-1.93 3.407h-.187L5.526 4.112A8.73 8.73 0 0 1 12 1.25" />
        </g>
        <path
          fill="currentColor"
          d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 1 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
BellOffIconFillDuotone.displayName = "BellOffIconFillDuotone";
export { BellOffIconFillDuotone };
