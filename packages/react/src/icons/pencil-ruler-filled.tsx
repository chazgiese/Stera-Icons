import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PencilRulerIconFilled = memo(
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
          d="M10.5 20.75a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75V19.5h7zM18.75 2.5c.966 0 1.75.784 1.75 1.75v16.5a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75v-2.5h3a1 1 0 1 0 0-2h-3V13.5h3a1 1 0 1 0 0-2h-3V8.75h3a1 1 0 1 0 0-2h-3v-2.5c0-.966.784-1.75 1.75-1.75zM10.5 17.5h-7v-10h7zM7 1.5a.5.5 0 0 1 .38.175l3 3.5a.5.5 0 0 1 .12.325h-7a.5.5 0 0 1 .12-.325l3-3.5A.5.5 0 0 1 7 1.5"
        />
      </svg>
    ))
);
PencilRulerIconFilled.displayName = "PencilRulerIconFilled";
export { PencilRulerIconFilled };
