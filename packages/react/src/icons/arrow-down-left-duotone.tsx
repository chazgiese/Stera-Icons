import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowDownLeftIconDuotone = memo(
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
          d="M17.47 5.47a.75.75 0 1 1 1.06 1.06L7.81 17.25H6.75v-1.06z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M6 7.25a.75.75 0 0 1 .75.75v9.25H16a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75V8A.75.75 0 0 1 6 7.25"
        />
      </svg>
    ))
);
ArrowDownLeftIconDuotone.displayName = "ArrowDownLeftIconDuotone";
export { ArrowDownLeftIconDuotone };
