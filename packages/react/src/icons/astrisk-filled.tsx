import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AstriskIconFilled = memo(
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
          d="M12 .5A1.5 1.5 0 0 1 13.5 2v7.398l6.413-3.702a1.5 1.5 0 0 1 1.5 2.599l-6.407 3.698 6.412 3.703a1.5 1.5 0 0 1-1.5 2.599L13.5 14.589V22a1.5 1.5 0 0 1-3 0v-7.405l-6.407 3.7a1.5 1.5 0 0 1-1.5-2.599l6.412-3.703-6.407-3.698a1.5 1.5 0 0 1 1.5-2.599L10.5 9.393V2A1.5 1.5 0 0 1 12 .5"
        />
      </svg>
    ))
);
AstriskIconFilled.displayName = "AstriskIconFilled";
export { AstriskIconFilled };
