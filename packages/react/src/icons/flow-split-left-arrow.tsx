import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitLeftArrowIcon = memo(
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
          d="M4.47 1.47a.75.75 0 1 1 1.06 1.06L3.81 4.25H7A4.75 4.75 0 0 1 11.75 9v2.25h3.575a3.751 3.751 0 1 1 0 1.5H11.75V15A4.75 4.75 0 0 1 7 19.75H3.81l1.72 1.72a.75.75 0 0 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 1 1 1.06 1.06l-1.72 1.72H7A3.25 3.25 0 0 0 10.25 15V9A3.25 3.25 0 0 0 7 5.75H3.81l1.72 1.72a.75.75 0 0 1-1.06 1.06l-3-3a.8.8 0 0 1-.138-.195A.74.74 0 0 1 1.25 5q.001-.1.027-.192c.01-.033.017-.067.03-.098q.02-.044.046-.084a1 1 0 0 1 .061-.088q.026-.035.056-.068zM19 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitLeftArrowIcon.displayName = "FlowSplitLeftArrowIcon";
export { FlowSplitLeftArrowIcon };
