import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CollapseSimpleIconBoldDuotone = memo(
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
          <path d="M8 16v1.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L6.586 16zM20.293 2.293a1 1 0 0 1 1.414 1.414L17.414 8H16V6.586z" />
        </g>
        <path
          fill="currentColor"
          d="M9 14a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-4H4a1 1 0 1 1 0-2zM15 3a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
CollapseSimpleIconBoldDuotone.displayName = "CollapseSimpleIconBoldDuotone";
export { CollapseSimpleIconBoldDuotone };
