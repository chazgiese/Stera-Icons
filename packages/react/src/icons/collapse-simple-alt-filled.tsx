import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CollapseSimpleAltIconFilled = memo(
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
          d="M21 14a1 1 0 0 1 .707 1.707L19.414 18l2.293 2.293a1 1 0 1 1-1.414 1.414L18 19.414l-2.293 2.293A1 1 0 0 1 14 21v-6a1 1 0 0 1 .897-.995L15 14zM2.293 2.293a1 1 0 0 1 1.414 0L6 4.586l2.293-2.293A1 1 0 0 1 10 3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-.707-1.707L4.586 6 2.293 3.707a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
CollapseSimpleAltIconFilled.displayName = "CollapseSimpleAltIconFilled";
export { CollapseSimpleAltIconFilled };
