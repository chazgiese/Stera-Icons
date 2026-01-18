import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BellIconFillDuotone = memo(
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
        <path fill="currentColor" d="M16.69 18.75a4.75 4.75 0 0 1-9.38 0z" />
        <path
          fill="currentColor"
          d="M12 1.25A8.75 8.75 0 0 1 20.75 10v1.892c0 .589.16 1.167.463 1.673l1.068 1.778c.899 1.5-.182 3.407-1.93 3.407H3.65c-1.749 0-2.83-1.908-1.93-3.407l1.067-1.778a3.25 3.25 0 0 0 .463-1.673V10A8.75 8.75 0 0 1 12 1.25"
          opacity={0.4}
        />
      </svg>
    ))
);
BellIconFillDuotone.displayName = "BellIconFillDuotone";
export { BellIconFillDuotone };
