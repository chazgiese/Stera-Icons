import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowsCollapseAltFilled = memo(
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
          d="M14 13a1 1 0 0 0-1 1v6a1 1 0 0 0 1.707.707L17 18.414l3.293 3.293a1 1 0 1 0 1.414-1.414L18.414 17l2.293-2.293A1 1 0 0 0 20 13zM3.707 2.293a1 1 0 1 0-1.414 1.414L5.586 7 3.293 9.293A1 1 0 0 0 4 11h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1.707-.707L7 5.586z"
        />
      </svg>
    ))
);
ArrowsCollapseAltFilled.displayName = "ArrowsCollapseAltFilled";
export { ArrowsCollapseAltFilled };
