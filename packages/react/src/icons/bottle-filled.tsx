import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BottleFilled = memo(
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
          d="M13.1 1.005a1 1 0 0 1 .899.953l.223 5.346a1 1 0 0 0 .218.583l1.153 1.44a3 3 0 0 1 .657 1.874V21a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-9.799a3 3 0 0 1 .657-1.874l1.153-1.44a1 1 0 0 0 .218-.583l.223-5.346.009-.099A1 1 0 0 1 11 1h2z"
        />
      </svg>
    ))
);
BottleFilled.displayName = "BottleFilled";
export { BottleFilled };
