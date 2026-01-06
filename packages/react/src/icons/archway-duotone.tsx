import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArchwayIconDuotone = memo(
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
          d="M19.652 21.651A3.74 3.74 0 0 1 17 22.75H7a3.74 3.74 0 0 1-2.651-1.099l1.06-1.06c.408.408.97.659 1.591.659h10c.621 0 1.183-.251 1.59-.66z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 1.25A8.75 8.75 0 0 1 20.75 10v9a3.74 3.74 0 0 1-1.099 2.651l-1.06-1.06c.408-.408.659-.97.659-1.591v-9a7.25 7.25 0 1 0-14.5 0v9c0 .622.251 1.183.66 1.59l-1.061 1.061A3.74 3.74 0 0 1 3.25 19v-9A8.75 8.75 0 0 1 12 1.25"
        />
      </svg>
    ))
);
ArchwayIconDuotone.displayName = "ArchwayIconDuotone";
export { ArchwayIconDuotone };
