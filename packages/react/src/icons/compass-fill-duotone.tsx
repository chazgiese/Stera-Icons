import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CompassIconFillDuotone = memo(
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
          <path d="M12.001 10.75a1.251 1.251 0 0 1 0 2.5 1.25 1.25 0 1 1 0-2.5" />
          <path
            fillRule="evenodd"
            d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m5.207 5.543a1 1 0 0 0-1.066-.227l-6.5 2.5c-.264.102-.473.31-.575.575l-2.5 6.5a1.001 1.001 0 0 0 1.293 1.293l6.5-2.5c.264-.102.473-.31.575-.575l2.5-6.5a1 1 0 0 0-.227-1.066"
            clipRule="evenodd"
          />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16.14 6.566a1.001 1.001 0 0 1 1.293 1.293l-2.5 6.5a1 1 0 0 1-.574.575l-6.5 2.5a1 1 0 0 1-1.293-1.293l2.5-6.5c.101-.264.31-.473.574-.575zM12 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CompassIconFillDuotone.displayName = "CompassIconFillDuotone";
export { CompassIconFillDuotone };
