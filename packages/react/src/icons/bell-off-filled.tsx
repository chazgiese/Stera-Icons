import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BellOffIconFilled = memo(
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
          d="M16.545 20.08a4.998 4.998 0 0 1-9.489-1.33H3.65c-1.749 0-2.83-1.908-1.93-3.407l1.068-1.778a3.25 3.25 0 0 0 .463-1.673V10c0-.967.158-1.897.448-2.767zm-7.447-1.33A3 3 0 0 0 12.001 21a3 3 0 0 0 2.9-2.25z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M2.293 2.293a1 1 0 0 1 1.415 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414M12 1.25A8.75 8.75 0 0 1 20.75 10v1.892c0 .589.16 1.167.463 1.673l1.068 1.778c.612 1.02.305 2.23-.504 2.898L6.629 3.094a8.7 8.7 0 0 1 5.372-1.844"
        />
      </svg>
    ))
);
BellOffIconFilled.displayName = "BellOffIconFilled";
export { BellOffIconFilled };
