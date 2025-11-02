import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ToolsIconFilltone = memo(
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
          <path d="M5.976 13.232a6.2 6.2 0 0 0 1.58.106l3.105 3.104c-.033.528.002 1.06.104 1.581l-2.983 2.985a3.387 3.387 0 0 1-4.79-4.79zM19.793 2.068a1 1 0 0 1 1.07.225l.843.844a1 1 0 0 1 .15 1.221l-1.265 2.11a1 1 0 0 1-1.564.193l-.138-.137-3.293 3.291-1.414-1.414 3.292-3.292-.136-.137a1 1 0 0 1 .193-1.564l2.11-1.266z" />
        </g>
        <path
          fill="currentColor"
          d="M5.966 2.658a4.676 4.676 0 0 1 5.793 5.441l4.14 4.14a4.675 4.675 0 0 1 5.442 5.795.5.5 0 0 1-.836.225L19.2 16.955h-2.246V19.2l1.304 1.304a.5.5 0 0 1-.225.837 4.675 4.675 0 0 1-5.795-5.443l-4.14-4.14a4.676 4.676 0 0 1-5.441-5.794l.021-.063a.5.5 0 0 1 .816-.161l1.304 1.304h2.246V4.799L5.74 3.495a.5.5 0 0 1 .225-.837"
        />
      </svg>
    ))
);
ToolsIconFilltone.displayName = "ToolsIconFilltone";
export { ToolsIconFilltone };
