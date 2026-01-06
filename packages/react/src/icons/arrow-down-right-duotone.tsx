import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowDownRightIconDuotone = memo(
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
          d="M5.47 5.47a.75.75 0 0 1 1.06 0l10.72 10.72v1.06h-1.06L5.47 6.53a.75.75 0 0 1 0-1.06"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M18 7.25a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-.75.75H8a.75.75 0 0 1 0-1.5h9.25V8a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
ArrowDownRightIconDuotone.displayName = "ArrowDownRightIconDuotone";
export { ArrowDownRightIconDuotone };
