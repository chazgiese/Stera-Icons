import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PencilRulerIconFillDuotone = memo(
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
          d="M10.5 19.5h-7v-2h7zM17 16.25a1 1 0 0 1 0 2h-3.5v-2zM17 11.5a1 1 0 1 1 0 2h-3.5v-2zM17 6.75a1 1 0 0 1 0 2h-3.5v-2zM10.5 8h-7V6h7z"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M19.153 2.508A1.5 1.5 0 0 1 20.5 4v17a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-2.75H17a1 1 0 1 0 0-2h-3.5V13.5H17a1 1 0 1 0 0-2h-3.5V8.75H17a1 1 0 1 0 0-2h-3.5V4A1.5 1.5 0 0 1 15 2.5h4zM10.5 21A1.5 1.5 0 0 1 9 22.5H5A1.5 1.5 0 0 1 3.5 21v-1.5h7zM10.5 17.5h-7V8h7zM7 1.5a.5.5 0 0 1 .38.175l3 3.5a.5.5 0 0 1 .12.325V6h-7v-.5a.5.5 0 0 1 .12-.325l3-3.5A.5.5 0 0 1 7 1.5" />
        </g>
      </svg>
    ))
);
PencilRulerIconFillDuotone.displayName = "PencilRulerIconFillDuotone";
export { PencilRulerIconFillDuotone };
