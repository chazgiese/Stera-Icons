import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowULeftTopIconDuotone = memo(
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
          d="M15.5 6.25a7.25 7.25 0 1 1 0 14.5H8a.75.75 0 0 1 0-1.5h7.5a5.75 5.75 0 0 0 0-11.5H3.81L3.06 7l.75-.75z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M5.47 2.47a.75.75 0 1 1 1.06 1.06L3.06 7l3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1-.094-.946l.094-.114z"
        />
      </svg>
    ))
);
ArrowULeftTopIconDuotone.displayName = "ArrowULeftTopIconDuotone";
export { ArrowULeftTopIconDuotone };
