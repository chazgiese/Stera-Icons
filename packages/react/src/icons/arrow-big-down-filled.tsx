import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowBigDownFilled = memo(
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
          d="M15 3a2 2 0 0 1 2 2v4.5h3.793c1.336 0 2.005 1.616 1.06 2.56l-8.262 8.263a2.25 2.25 0 0 1-3.182 0L2.146 12.06c-.944-.944-.275-2.56 1.061-2.56H7V5a2 2 0 0 1 2-2z"
        />
      </svg>
    ))
);
ArrowBigDownFilled.displayName = "ArrowBigDownFilled";
export { ArrowBigDownFilled };
