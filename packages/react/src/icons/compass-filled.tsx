import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CompassIconFilled = memo(
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
          d="M12.001 11a1.001 1.001 0 0 1 0 2 1 1 0 1 1 0-2"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m5.207 5.793a1 1 0 0 0-1.066-.227l-6.5 2.5c-.264.102-.473.31-.575.575l-2.5 6.5a1.001 1.001 0 0 0 1.293 1.293l6.5-2.5c.264-.102.473-.31.575-.575l2.5-6.5a1 1 0 0 0-.227-1.066"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CompassIconFilled.displayName = "CompassIconFilled";
export { CompassIconFilled };
