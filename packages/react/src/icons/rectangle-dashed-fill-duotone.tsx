import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RectangleDashedIconFillDuotone = memo(
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
          <path d="M2 15.5a1 1 0 0 1 1 1v.04A2.46 2.46 0 0 0 5.46 19h.04a1 1 0 1 1 0 2h-.04A4.46 4.46 0 0 1 1 16.54v-.04a1 1 0 0 1 1-1M15 19a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zM22 15.5a1 1 0 0 1 1 1v.04A4.46 4.46 0 0 1 18.54 21h-.04a1 1 0 1 1 0-2h.04A2.46 2.46 0 0 0 21 16.54v-.04a1 1 0 0 1 1-1M2.003 10a1 1 0 0 1 1 1l-.001 2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M22 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M5.5 3a1 1 0 0 1 0 2h-.04A2.46 2.46 0 0 0 3 7.46v.04a1 1 0 0 1-2 0v-.04A4.46 4.46 0 0 1 5.46 3zM18.54 3A4.46 4.46 0 0 1 23 7.46v.04a1 1 0 1 1-2 0v-.04A2.46 2.46 0 0 0 18.54 5h-.04a1 1 0 1 1 0-2zM15 3a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2z" />
        </g>
        <path
          fill="currentColor"
          d="M17 7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"
        />
      </svg>
    ))
);
RectangleDashedIconFillDuotone.displayName = "RectangleDashedIconFillDuotone";
export { RectangleDashedIconFillDuotone };
