import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowURightIconDuotone = memo(
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
          d="M16 3.25a.75.75 0 0 1 0 1.5H8.5a5.75 5.75 0 1 0 0 11.5h11.69l.75.75-.75.75H8.5a7.25 7.25 0 1 1 0-14.5z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M17.47 12.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 .094.946l-.094.114-4 4a.75.75 0 1 1-1.06-1.06L20.94 17l-3.47-3.47a.75.75 0 0 1 0-1.06"
        />
      </svg>
    ))
);
ArrowURightIconDuotone.displayName = "ArrowURightIconDuotone";
export { ArrowURightIconDuotone };
