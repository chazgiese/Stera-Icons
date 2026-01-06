import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCornerDownRightIconDuotone = memo(
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
          d="M3 3.25a.75.75 0 0 0-.75.75v8A3.75 3.75 0 0 0 6 15.75h13.19l.75-.75-.75-.75H6A2.25 2.25 0 0 1 3.75 12V4A.75.75 0 0 0 3 3.25"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M16.53 9.47a.75.75 0 1 0-1.06 1.06L19.94 15l-4.47 4.47a.75.75 0 1 0 1.06 1.06l5-5 .094-.114a.75.75 0 0 0-.094-.946z"
        />
      </svg>
    ))
);
ArrowCornerDownRightIconDuotone.displayName = "ArrowCornerDownRightIconDuotone";
export { ArrowCornerDownRightIconDuotone };
