import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitSquareUpIconBold = memo(
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
          fillRule="evenodd"
          d="M12 23a4 4 0 0 0 1-7.874V13h4a3 3 0 0 0 3-3V9h.5A2.5 2.5 0 0 0 23 6.5v-3A2.5 2.5 0 0 0 20.5 1h-3A2.5 2.5 0 0 0 15 3.5v3A2.5 2.5 0 0 0 17.5 9h.5v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h.5A2.5 2.5 0 0 0 9 6.5v-3A2.5 2.5 0 0 0 6.5 1h-3A2.5 2.5 0 0 0 1 3.5v3A2.5 2.5 0 0 0 3.5 9H4v1a3 3 0 0 0 3 3h4v2.126A4.002 4.002 0 0 0 12 23M3.5 7a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5zm14 0a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5zM12 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitSquareUpIconBold.displayName = "FlowSplitSquareUpIconBold";
export { FlowSplitSquareUpIconBold };
