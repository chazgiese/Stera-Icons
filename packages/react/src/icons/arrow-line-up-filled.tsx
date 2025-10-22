import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLineUpIconFilled = memo(
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
          d="M3 3a1 1 0 0 0 1 1h16a1 1 0 1 0 0-2H4a1 1 0 0 0-1 1M5.374 12.565c-.806.806-.235 2.185.905 2.185H11V21a1 1 0 1 0 2 0v-6.25h4.72c1.14 0 1.712-1.38.906-2.185l-5.72-5.72c-.5-.5-1.311-.5-1.811 0z"
        />
      </svg>
    ))
);
ArrowLineUpIconFilled.displayName = "ArrowLineUpIconFilled";
export { ArrowLineUpIconFilled };
