import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLeftIconDuotone = memo(
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
          <path d="M19 11.25a.75.75 0 0 1 0 1.5H6.81L6.06 12l.75-.75zM4.263 11.867" />
        </g>
        <path
          fill="currentColor"
          d="M11.47 4.47a.75.75 0 1 1 1.06 1.06L6.06 12l6.47 6.47a.75.75 0 1 1-1.06 1.06l-7-7a.75.75 0 0 1 0-1.06z"
        />
      </svg>
    ))
);
ArrowLeftIconDuotone.displayName = "ArrowLeftIconDuotone";
export { ArrowLeftIconDuotone };
