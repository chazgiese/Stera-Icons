import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BellIconFilled = memo(
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
          d="M12 1.25A8.75 8.75 0 0 1 20.75 10v1.892c0 .589.16 1.167.463 1.673l1.067 1.778c.9 1.5-.18 3.407-1.93 3.407h-3.407a5 5 0 0 1-9.887 0H3.65c-1.75 0-2.83-1.908-1.93-3.407l1.067-1.778a3.25 3.25 0 0 0 .463-1.673V10A8.75 8.75 0 0 1 12 1.25m-2.902 17.5A3 3 0 0 0 12 21a3 3 0 0 0 2.902-2.25z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BellIconFilled.displayName = "BellIconFilled";
export { BellIconFilled };
