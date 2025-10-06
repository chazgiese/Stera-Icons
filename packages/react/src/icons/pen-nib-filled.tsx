import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PenNibFilled = memo(
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
          d="M11 10.709a2.5 2.5 0 1 0 2 0V1h1l.117.007a1 1 0 0 1 .683.393c2.273 3.031 4.668 6.894 5.686 10.315.508 1.705.712 3.425.269 4.914-.404 1.358-1.316 2.415-2.755 3.057V22a1 1 0 0 1-1 1H6.998a1 1 0 0 1-1-1v-2.314c-1.438-.642-2.35-1.7-2.755-3.057-.443-1.489-.238-3.21.27-4.914C4.53 8.295 6.925 4.43 9.198 1.4c.189-.251.486-.4.8-.4H11z"
        />
      </svg>
    ))
);
PenNibFilled.displayName = "PenNibFilled";
export { PenNibFilled };
