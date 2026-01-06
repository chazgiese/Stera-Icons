import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCornerDownLeftIconDuotone = memo(
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
          d="M7.47 9.47a.75.75 0 1 1 1.06 1.06L4.06 15l4.47 4.47a.75.75 0 1 1-1.06 1.06l-5-5-.094-.114a.75.75 0 0 1 .094-.946z"
        />
        <path
          fill="currentColor"
          d="M21 3.25a.75.75 0 0 1 .75.75v8A3.75 3.75 0 0 1 18 15.75H4.81L4.06 15l.75-.75H18A2.25 2.25 0 0 0 20.25 12V4a.75.75 0 0 1 .75-.75"
          opacity={0.4}
        />
      </svg>
    ))
);
ArrowCornerDownLeftIconDuotone.displayName = "ArrowCornerDownLeftIconDuotone";
export { ArrowCornerDownLeftIconDuotone };
