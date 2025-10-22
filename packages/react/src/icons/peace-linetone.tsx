import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PeaceIconLinetone = memo(
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
          fillRule="evenodd"
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
          clipRule="evenodd"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="m19.121 17.504-5.978-5.98V3.072a9 9 0 0 0-2.286 0v8.452l-5.978 5.98a9 9 0 0 0 1.616 1.616l4.362-4.362v6.17a9 9 0 0 0 2.286 0v-6.17l4.362 4.362a9 9 0 0 0 1.616-1.616"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PeaceIconLinetone.displayName = "PeaceIconLinetone";
export { PeaceIconLinetone };
