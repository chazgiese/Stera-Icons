import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitRightArrow = memo(
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
          d="M18.47 1.47a.75.75 0 0 1 1.06 0l3 3q.03.032.056.068a1 1 0 0 1 .06.088q.025.04.045.084.02.048.03.098A.8.8 0 0 1 22.75 5c0 .121-.031.234-.082.335a.8.8 0 0 1-.138.195l-3 3a.75.75 0 0 1-1.06-1.06l1.72-1.72H17A3.25 3.25 0 0 0 13.75 9v6A3.25 3.25 0 0 0 17 18.25h3.19l-1.72-1.72a.75.75 0 1 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06l1.72-1.72H17A4.75 4.75 0 0 1 12.25 15v-2.25H8.675a3.751 3.751 0 1 1 0-1.5h3.575V9A4.75 4.75 0 0 1 17 4.25h3.19l-1.72-1.72a.75.75 0 0 1 0-1.06M5 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitRightArrow.displayName = "FlowSplitRightArrow";
export { FlowSplitRightArrow };
