import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CollapseIconBoldDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M8 16v1.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L6.586 16zM20.707 19.293a1 1 0 0 1-1.414 1.414L16 17.414V16h1.414zM19.293 3.293a1 1 0 0 1 1.414 1.414L17.414 8H16V6.586zM3.293 3.293a1 1 0 0 1 1.414 0L8 6.586V8H6.586L3.293 4.707a1 1 0 0 1 0-1.414" />
        </g>
        <path
          fill="currentColor"
          d="M9 14a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-3H5a1 1 0 1 1 0-2zM19 14a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1zM9 4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h3V5a1 1 0 0 1 1-1M15 4a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
CollapseIconBoldDuotone.displayName = "CollapseIconBoldDuotone";
export { CollapseIconBoldDuotone };
