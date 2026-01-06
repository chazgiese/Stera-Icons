import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PeaceIconBoldDuotone = memo(
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
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 3q.508 0 1 .057v8.529l6.03 6.03a9 9 0 0 1-1.414 1.414L13 14.414v6.528A9 9 0 0 1 12 21q-.508-.001-1-.058v-6.528L6.383 19.03a9 9 0 0 1-1.414-1.414L11 11.586v-8.53A9 9 0 0 1 12 3"
        />
      </svg>
    ))
);
PeaceIconBoldDuotone.displayName = "PeaceIconBoldDuotone";
export { PeaceIconBoldDuotone };
