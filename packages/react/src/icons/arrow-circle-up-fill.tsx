import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCircleUpIconFill = memo(
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
          d="M12 22.75C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25 22.75 6.063 22.75 12 17.937 22.75 12 22.75M12 18a1 1 0 0 0 1-1V9.414l3.293 3.293a1 1 0 1 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 1 0 1.414 1.414L11 9.414V17a1 1 0 0 0 1 1"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ArrowCircleUpIconFill.displayName = "ArrowCircleUpIconFill";
export { ArrowCircleUpIconFill };
