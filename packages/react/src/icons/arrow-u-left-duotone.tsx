import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowULeftIconDuotone = memo(
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
          d="M15.5 3.25a7.25 7.25 0 1 1 0 14.5H3.81L3.06 17l.75-.75H15.5a5.75 5.75 0 0 0 0-11.5H8a.75.75 0 0 1 0-1.5z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M5.47 12.47a.75.75 0 1 1 1.06 1.06L3.06 17l3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4-.094-.114a.75.75 0 0 1 .094-.946z"
        />
      </svg>
    ))
);
ArrowULeftIconDuotone.displayName = "ArrowULeftIconDuotone";
export { ArrowULeftIconDuotone };
