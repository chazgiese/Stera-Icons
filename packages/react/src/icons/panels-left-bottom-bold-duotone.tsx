import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PanelsLeftBottomIconBoldDuotone = memo(
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
        <path fill="currentColor" d="M9 19v-3h12v-2H9V5H7v14z" opacity={0.4} />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19 21a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4zM5 19a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PanelsLeftBottomIconBoldDuotone.displayName = "PanelsLeftBottomIconBoldDuotone";
export { PanelsLeftBottomIconBoldDuotone };
