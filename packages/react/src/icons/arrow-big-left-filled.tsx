import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowBigLeftIconFilled = memo(
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
          d="M11.94 2.147c.945-.944 2.56-.275 2.56 1.06v3.794H19a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4.5v3.793c0 1.336-1.615 2.005-2.56 1.06l-8.263-8.262a2.25 2.25 0 0 1 0-3.182z"
        />
      </svg>
    ))
);
ArrowBigLeftIconFilled.displayName = "ArrowBigLeftIconFilled";
export { ArrowBigLeftIconFilled };
